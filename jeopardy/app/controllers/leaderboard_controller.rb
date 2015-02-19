class LeaderboardController < ApplicationController

	def index
		@contestant = Contestant.all
    @game = Game.all  
  end

end