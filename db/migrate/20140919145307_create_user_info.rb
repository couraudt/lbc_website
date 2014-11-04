class CreateUserInfo < ActiveRecord::Migration
  def change
    create_table :user_infos do |t|
      t.references :user
      t.string :gender
      t.string :lastname
      t.string :firstname
      t.string :pseudo
      t.string :region
      t.string :dpt_code
      t.string :billing_address
      t.string :billing_zipcode
      t.string :billing_postal_city
      t.string :phone
      t.string :password
    end
  end
end
