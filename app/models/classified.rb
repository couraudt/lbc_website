class Classified < ActiveRecord::Base
  belongs_to :user

  enum status: [ :processing, :pending, :online ]

  validates_presence_of :name, :data

  has_attached_file :image_1, styles: { full: { geometry: '672x504>', auto_orient: false } }, convert_options: { all: '-quality 75 -strip' }
  has_attached_file :image_2, styles: { full: { geometry: '672x504>', auto_orient: false } }, convert_options: { all: '-quality 75 -strip' }
  has_attached_file :image_3, styles: { full: { geometry: '672x504>', auto_orient: false } }, convert_options: { all: '-quality 75 -strip' }
  validates_attachment_content_type :image_1, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :image_2, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :image_3, content_type: /\Aimage\/.*\Z/

  before_create do
    self.password = AESCrypt.encrypt(Devise.friendly_token.first(8), Settings.encrypt_key)
    self.unique_id = Devise.friendly_token.first(8)
    self.email = "lbc-#{self.unique_id}@#{Settings.email_domain}"
  end

  after_create :delete_original_image

  before_destroy do
    if self.online?
      LbcApi.delete(self.lbc_id, AESCrypt.decrypt(self.password, Settings.encrypt_key))
    end
  end

  private

  def delete_original_image
    if self.image_1_updated_at_changed?
      begin
        File.delete(self.image_1.path)
        Dir.delete(Pathname.new(self.image_1.path).dirname)
      rescue
        # ignored
      end
    end
    if self.image_2_updated_at_changed?
      begin
        File.delete(self.image_2.path)
        Dir.delete(Pathname.new(self.image_2.path).dirname)
      rescue
        # ignored
      end
    end
    if self.image_3_updated_at_changed?
      begin
        File.delete(self.image_3.path)
        Dir.delete(Pathname.new(self.image_3.path).dirname)
      rescue
        # ignored
      end
    end
  end
end
