class Advisor < ActiveRecord::Base
	attachment :curriculum, extension: "pdf"
end
