class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  include LocaleHelper, LocaleConfiguration

  before_filter :set_cache, :set_locale

  # after_filter :flash_to_headers
  
  private

	  def set_cache
	    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
	    response.headers["Pragma"] = "no-cache"
	    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
	  end

    def flash_to_headers
      return unless request.xhr?
      response.headers['X-Message'] = flash[:error]  unless flash[:error].blank?

      flash.discard  # To not appear flash when reloading the page
    end
  
end
