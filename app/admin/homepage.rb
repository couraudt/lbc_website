ActiveAdmin.register_page 'homepage' do
  menu false

  page_action :index do
    # if current_user.infos.present?
      redirect_to classifieds_path
    # else
    #   @infos = current_user.build_infos
    #   flash[:notice] = "Tout d'abord, veuillez remplir les informations de création de compte"
    # end
  end

  page_action :create, method: :post do
    @infos = current_user.build_infos(params.permit(:gender, :lastname, :firstname, :pseudo, :region, :dpt_code, :billing_address, :billing_zipcode, :billing_postal_city, :phone))

    if @infos.save
      redirect_to classifieds_path
    else
      render 'index'
    end
  end

  content :title => 'Bienvenue !' do
    render 'form'
  end
end
