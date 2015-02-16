class Contestant < ActiveRecord::Base
	self.has_many :questions
end