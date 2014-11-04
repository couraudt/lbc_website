class CreateClassifieds < ActiveRecord::Migration
  def change
    create_table :classifieds do |t|
      t.references :user
      t.string :unique_id
      t.string :lbc_id
      t.string :name
      t.string :email
      t.integer :price
      t.string :password
      t.attachment :image_1
      t.attachment :image_2
      t.attachment :image_3
      t.text :data
      t.integer :status, default: 0, null: false
      t.boolean :enable, default: true, null: false
      t.datetime :activate_at
      t.integer :activate_count, default: 0, null: false
      t.timestamps
    end

    add_index :classifieds, :user_id
    add_index :classifieds, :status
    add_index :classifieds, :name
    add_index :classifieds, :price
    add_index :classifieds, :activate_at
    add_index :classifieds, :enable
    add_index :classifieds, :unique_id
  end
end
