class UserInfo < ActiveRecord::Base
  belongs_to :user

  before_create do
    self.password = AESCrypt.encrypt(Devise.friendly_token.first(8), Settings.encrypt_key)
  end
end
