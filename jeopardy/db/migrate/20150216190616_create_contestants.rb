class CreateContestants < ActiveRecord::Migration
  def change
    create_table :contestants do |t|
    	t.string :fname
    	t.string :lname
    	t.string :email
    	t.integer :running_score
    	t.integer :total_score
    	t.string :password_digest	
    end
  end
end
