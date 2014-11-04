ActionMailer::Base.smtp_settings = {
    :port           => 587,
    :address        => 'smtp.mailgun.org',
    :user_name      => 'lbc@sweetdub.com',
    :password       => 'Dqqri0qpQaSEhX9LKQ60',
    :domain         => 'sweetdub.com',
    :authentication => :plain,
}
ActionMailer::Base.delivery_method = :smtp
