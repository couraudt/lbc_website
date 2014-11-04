if defined? Airbrake
  Airbrake.configure do |config|
    config.api_key = '33735a5fbf61f1a42e0ead502084d15a'
    config.ignore << 'MultiJson::LoadError'
    config.ignore << 'ArgumentError'
    config.ignore << 'EOFError'
  end
end
