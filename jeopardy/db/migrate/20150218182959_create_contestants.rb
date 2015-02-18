class CreateContestants < ActiveRecord::Migration
  def change
    create_table :contestants do |t|
    	t.string :fname
    	t.string :lname
    	t.string :username
    	t.string :password_digest
    	t.integer :total_score
    end
  end
end
