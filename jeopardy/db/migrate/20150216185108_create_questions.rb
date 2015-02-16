class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
    	t.integer :question_id
    	t.integer :value
    	t.string :category_title
    	t.integer :contestant_id
    end
  end
end
