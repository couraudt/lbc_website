# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140919145307) do

  create_table "classifieds", force: true do |t|
    t.integer  "user_id"
    t.string   "unique_id"
    t.string   "lbc_id"
    t.string   "name"
    t.integer  "price"
    t.string   "password"
    t.string   "image_1_file_name"
    t.string   "image_1_content_type"
    t.integer  "image_1_file_size"
    t.datetime "image_1_updated_at"
    t.string   "image_2_file_name"
    t.string   "image_2_content_type"
    t.integer  "image_2_file_size"
    t.datetime "image_2_updated_at"
    t.string   "image_3_file_name"
    t.string   "image_3_content_type"
    t.integer  "image_3_file_size"
    t.datetime "image_3_updated_at"
    t.text     "data"
    t.integer  "status",               default: 0,    null: false
    t.boolean  "enable",               default: true, null: false
    t.datetime "activate_at"
    t.integer  "activate_count",       default: 0,    null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "classifieds", ["activate_at"], name: "index_classifieds_on_activate_at"
  add_index "classifieds", ["enable"], name: "index_classifieds_on_enable"
  add_index "classifieds", ["name"], name: "index_classifieds_on_name"
  add_index "classifieds", ["price"], name: "index_classifieds_on_price"
  add_index "classifieds", ["status"], name: "index_classifieds_on_status"
  add_index "classifieds", ["unique_id"], name: "index_classifieds_on_unique_id"
  add_index "classifieds", ["user_id"], name: "index_classifieds_on_user_id"

  create_table "user_infos", force: true do |t|
    t.integer "user_id"
    t.string  "gender"
    t.string  "lastname"
    t.string  "firstname"
    t.string  "pseudo"
    t.string  "region"
    t.string  "dpt_code"
    t.string  "billing_address"
    t.string  "billing_zipcode"
    t.string  "billing_postal_city"
    t.string  "phone"
    t.string  "password"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
