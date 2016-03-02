module LocaleHelper

  def existing_locales
    languages = I18n.available_locales
    languages.delete(I18n.locale.to_sym)
    languages
  end

  def current_locale
    I18n.locale
  end

end