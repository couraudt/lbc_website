class MessagesController < ActionController::Base
  before_action :set_classified
  respond_to :json

  def show
    Rails.logger.info "sender: #{params['sender']}"
    if params['subject'].include?('Activez votre annonce') or params['subject'].include?('Confirmez la demande de création de votre Compte')
      Rails.logger.info 'Activation'
      LbcApi.activate(params['body-plain'])
    elsif params['subject'].include?('est en ligne')
      Rails.logger.info 'En ligne'
      lbc_id = LbcApi.get_lbc_id(params['body-plain'])
      @classified.update_attributes({
          lbc_id: lbc_id,
          activate_at: DateTime.now,
          status: Classified.statuses['online'],
          activate_count: @classified.activate_count + 1
      })
      LbcMailer.activated(@classified).deliver if @classified.activate_count == 1
    elsif params['subject'].include?('Suppression de votre annonce')
      Rails.logger.info 'Suppression'
    elsif params['subject'].include?('sur Leboncoin.fr')
      Rails.logger.info 'Messages'
      content = params['body-plain'].split('Cet email vous a').first
      LbcMailer.messages(params['sender'], content, @classified).deliver
    end

    head :ok
  end

  private
  def set_classified
    @classified = Classified.find_by_unique_id(params[:id])
    head :ok unless @classified
  end
end
