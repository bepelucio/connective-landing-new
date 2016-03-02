class CreateAdvisors < ActiveRecord::Migration
  def change
    create_table :advisors do |t|
    	t.string :linkedin_url, null: false
    	t.string :curriculum_id

      	t.timestamps null: false
    end
  end
end
