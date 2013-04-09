
FACEBOOK_APP_ID="221145254619152"
FACEBOOK_APP_SECRET=""
GOOGLE_APP_ID="597462824491.apps.googleusercontent.com"
GOOGLE_APP_SECRET=""
EMAIL_ADDRESS=""
EMAIL_USERNAME=""
EMAIL_PASSWORD=""
TWITTER_APP_ID=""
TWITTER_APP_SECRET=""
LINKEDIN_APP_ID=""
LINKEDIN_APP_SECRET=""
MEETUP_APP_ID=""
MEETUP_APP_SECRET=""
RECAPTCHA_PUBLIC=""
RECAPTCHA_PRIVATE=""
MAPS_API_KEY=""

# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
DemocracyOnline3::Application.initialize!

require 'will_paginate'

#OmniAuth.config.test_mode = true

