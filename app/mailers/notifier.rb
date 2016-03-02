class Notifier < ApplicationMailer
	default to: ['gustavo@connective.com.pt', 'joao@connective.com.pt'], from: "gustavo@connective.com.pt"
 
  	def contact(params)
	    @name = params[:name]
	    @email = params[:email]
	    @message = params[:message]
	    mail subject: params[:subject]
  	end

  	def application(advisor)
  		# link = Refile.store.get(advisor.curriculum_id).download
  		@advisor = advisor
  		mail subject: advisor[:subject]
  	end

end
