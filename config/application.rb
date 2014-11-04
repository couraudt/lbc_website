require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require 'active_model/railtie'
require 'active_record/railtie'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_view/railtie'
require 'sprockets/railtie'
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module LBC
  class Application < Rails::Application
    config.time_zone = 'Paris'
    config.active_record.default_timezone = :local
    # I18n.enforce_available_locales = true
    config.i18n.default_locale = :fr
    # config.middleware.use Rack::Deflater
    # config.middleware.insert_before ActionDispatch::ParamsParser, 'CatchJsonParseErrors'
    # config.exceptions_app = self.routes
    config.autoload_paths += Dir["#{config.root}/lib"]
    config.assets.precompile += %w( active_admin.js active_admin.css jquery.bxslider.css jquery.bxslider.min.js classified.js classified.css homepage.css homepage.js )
  end
end
