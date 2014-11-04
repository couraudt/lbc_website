ActiveAdmin.register Classified do
  menu label: 'Mes annonces'
  scope_to :current_user

  actions :all, except: [:edit, :update]

  index do
    column :name do |c|
      link_to c.name, c
    end
    column :price
    column :status do |c|
      status_tag I18n.t("status.text.#{c.status}"), I18n.t("status.class.#{c.status}")
    end
    column :activate_at
    # column :enable do |c|
    #   if c.enable
    #     link_to 'Désactiver ?', disable_classified_path(c)
    #   else
    #     link_to 'Activer ?', enable_classified_path(c)
    #   end
    # end
    actions
  end

  filter :title

  form partial: 'form'

  show do |c|
    columns do
      column span: 2 do
        panel 'Informations générales' do
          attributes_table_for c do
            row :enable
            row :status do
              status_tag I18n.t("status.text.#{c.status}"), I18n.t("status.class.#{c.status}")
            end
            if c.lbc_id
              row :unique_id
              row :link do
                link_to 'Lien vers le site leboncoin.fr', "http://www.leboncoin.fr/annonces/#{c.lbc_id}.htm", target: :blank
              end
              row :lbc_id
              row :activate_at
              row :activate_count
            end
            # text_node '&nbsp'.html_safe
          end
        end
      end

      column do
        panel 'Images', class: 'slider' do
          if resource.image_1.present? || resource.image_2.present? || resource.image_3.present?
            render 'admin/images/slider', images: resource
          end
        end
      end
    end
  end

  controller do
    define_method :permitted_params do
      params
    end
  end

  before_save do |c|
    c.name = params[:subject]
    c.price = params[:price]
    c.data = params.except(:authenticity_token, :image_1, :image_2, :image_3, :utf8, :action, :controller).to_json
    c.image_1 = params[:image_1]
    c.image_2 = params[:image_2]
    c.image_3 = params[:image_3]
  end

  collection_action :ajax do
    require 'uri'
    open("http://www2.leboncoin.fr/ajax/brand_model_list.html?brand=#{params[:brand]}") {|f| @html = f.read }
    render html: @html.html_safe
  end

  member_action :disable do
    Classified.find(params[:id]).update_attribute(:enable, false)
    redirect_to classifieds_path, notice: "L'annonce vient d'être désactivée."
  end

  member_action :enable do
    Classified.find(params[:id]).update_attribute(:enable, true)
    redirect_to classifieds_path, notice: "L'annonce vient d'être activée."
  end
end
