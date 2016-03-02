module MainHelper

	def link_main(content, path)
		action = Rails.application.routes.recognize_path(path)[:action]
		options = action.eql?(params[:action]) ? { class: "active" } : {}
		content_tag(:li, link_to(content, path), options)
	end

end
