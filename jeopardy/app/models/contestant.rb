class Contestant < ActiveRecord::Base
	self.has_many :games
end