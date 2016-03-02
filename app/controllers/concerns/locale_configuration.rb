module LocaleConfiguration

  public

  def set_locale
    if params[:locale]
     I18n.locale = params[:locale]
     change_route_locale(I18n.locale)
    else
       I18n.locale = extract_locale || I18n.default_locale
       change_route_locale(I18n.locale)
    end
  end

  private

  def change_route_locale(locale)
    Rails.application.routes.default_url_options[:locale] = locale
  end
  
  def extract_locale
    getlocal = request.env['HTTP_ACCEPT_LANGUAGE'].nil? ? nil : request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}-[a-zA-Z]{2}/).first
    if !getlocal.nil?
      if !getlocal.split("-").last.empty? 
        splitlocal = getlocal.split("-").first + '-' + getlocal.split("-").last.upcase
        if splitlocal.split("-").first.match(/^(en|pt|es)$/)
          splitlocal.split("-").last.empty? ? splitlocal : splitlocal.split("-").first
        end
      else
        getlocal.match(/^(en|pt|es)$/) ? getlocal : I18n.default_locale
      end
    else
      I18n.default_locale
    end
  end  
  
end