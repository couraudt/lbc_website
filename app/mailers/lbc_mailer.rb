class LbcMailer < ActionMailer::Base
  default from: 'Robot LBC <lbc@sweetdub.com>'

  def activated(classified)
    @classified  = classified
    @user = classified.user
    @url = "http://www.leboncoin.fr/annonces/#{classified.lbc_id}.htm"
    mail(to: @user.email, subject: '[Le Bon Coin] Votre annonce est maintenant activée !')
  end

  def messages(from, content, classified)
    @classified  = classified
    @user = classified.user
    @url = "http://www.leboncoin.fr/annonces/#{classified.lbc_id}.htm"
    @content = content
    mail(to: @user.email, subject: '[Le Bon Coin] Vous avez recu un message', from: from)
  end
end
