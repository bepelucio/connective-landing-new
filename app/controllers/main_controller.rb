class MainController < ApplicationController
  before_action :new_advisor, except: [:solicitation, :contact]
  respond_to :html, :xml, :json, :js

  include MainHelper

  def index
    
  end

  def about
    
  end

  def login
    
  end

  def register
    
  end

  def how_it_works
    
  end

  def about
    
  end

  def be_advisor
    
  end

  def hire
    
  end

  def solicitation
    @advisor = Advisor.find_by_linkedin_url(advisor_params[:linkedin_url])
    if @advisor.nil? || !advisor_params[:curriculum].empty?
      (advisor_params)
      if @advisor.save!
        Notifier.application(@advisor).deliver
        flash[:success] = t "contact.solicitation.success"
      else
        flash[:error] = t "contact.solicitation.error"
      end
    else
      flash[:alert] = t "contact.solicitation.alert"
    end
    redirect_to :back
  end

  def contact
    email = Notifier.contact(params).deliver
    flash[:success] = t "contact.email.sent" if !email.nil?
    redirect_to :back
  end

  private
    def new_advisor
      @advisor = Advisor.new
    end

    def advisor_params
      params.require(:advisor).permit(:linkedin_url, :curriculum) 
    end
end
