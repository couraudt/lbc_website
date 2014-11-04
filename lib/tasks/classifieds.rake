namespace :classifieds do
  task create: :environment do
    create
  end

  task renew: :environment do
    puts 'Renew classifieds ...'
    delete
    create
  end

  # task all: [:delete, :create]

  # task classifieds: 'classifieds:all'

  def create
    puts 'Create pending classifieds ...'
    Classified.processing.find_each do |c|
      puts "-> Processing #{c.name}"
      files = []
      files << c.image_1.path(:full) if c.image_1.present?
      files << c.image_2.path(:full) if c.image_2.present?
      files << c.image_3.path(:full) if c.image_3.present?
      password = AESCrypt.decrypt(c.password, Settings.encrypt_key)
      begin
        LbcApi::Classified.create(c.email, password, JSON.parse(c.data), files)
        c.update_attributes({status: Classified.statuses['pending']})
      rescue Exception => e
        Airbrake.notify(e) if defined?(Airbrake)
      end
    end
  end

  def delete
    puts 'Delete old classifieds ...'
    Classified.online.find_each do |c|
      puts "-> Deleting #{c.name}"
      begin
        LbcApi.delete(c.lbc_id, AESCrypt.decrypt(c.password, Settings.encrypt_key))
        c.update_attributes({
          lbc_id: nil,
          activate_at: nil,
          status: Classified.statuses['processing']
        })
      rescue Exception => e
        Airbrake.notify(e) if defined?(Airbrake)
      end
    end
  end
end
