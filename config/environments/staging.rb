load Rails.root.join('config/environments/production.rb')

Rails.application.configure do
  config.action_mailer.show_previews = true
  config.action_mailer.preview_path = "#{Rails.root}/spec/mailers/previews"
end
