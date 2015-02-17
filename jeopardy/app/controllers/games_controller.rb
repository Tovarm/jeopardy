class GamesController < ApplicationController

	def index
		category_id = rand(0..18000)
	  @response = HTTParty.get("http://jservice.io/api/category?id=#{category_id}")
		category_id2 = rand(0..18000)
	  @response2 = HTTParty.get("http://jservice.io/api/category?id=#{category_id2}")
		category_id3 = rand(0..18000)
	  @response3 = HTTParty.get("http://jservice.io/api/category?id=#{category_id3}")
	end

end