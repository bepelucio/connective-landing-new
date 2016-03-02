source 'https://rubygems.org'
#Project ruby version is 2.2.3
ruby '2.2.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.3.13'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
# gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Responders gem to simplify response
gem 'responders', '~> 2.0'

group :development, :test do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  # Supporting gem for Rails Panel - Google Chrome
  gem 'meta_request'

  # Gem that replaces the standard Rails error page with much useful error page
  gem "better_errors"

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :production do
  # Gem necessary to deploy to heroku if the app if made in Rails 4.x
  gem 'rails_12factor'
end

### GEMS that are specified for this application ###

# Environment Variables
gem "figaro"

# Bootstrap - HTML, CSS, and JS framework for developing responsive, mobile first projects on the web
gem 'bootstrap-sass', '~> 3.3.6'

# FontAwesome - Font and CSS toolkit
gem "font-awesome-rails"

# Plugin for jquery-based component library could Twitter Bootstrap, used to style the file fields of the forms
gem 'bootstrap-filestyle-rails'

# Backstretch is a simple jQuery plugin that allows you to add a dynamically-resized, slideshow-capable background image to any page or element
gem 'backstretch-rails'

# Gem used to upload files to Amazon S3
gem "refile", require: "refile/rails"
gem "refile-s3"