class ContestantsController < ApplicationController

	def index
		@contestant = Contestant.all
		@id = params["id"]
  end


  def create
  	@contestant = Contestant.create({fname: params["fname"], lname: params["lname"], username: params["username"], password_digest: params["password"], total_score: params["total_score"]})

  	redirect_to "/games"
  end

  def edit

  end

  def update
  	
  end

end