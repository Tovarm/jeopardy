class Question < ActiveRecord::Base
	self.belongs_to :contestant
end