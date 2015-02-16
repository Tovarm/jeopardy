class WelcomeController < ApplicationController

	def index
# 		if value_choice == 100
	    @response_100 = HTTParty.get("http://jservice.io/api/clues?value=100")
#     # elsif value_choice == 200
# 	   #  @response_200 = HTTParty.get("http://jservice.io/api/clues?value=200")
#     # elsif value_choice == 300
# 	   #  @response_300 = HTTParty.get("http://jservice.io/api/clues?value=300")
#     # elsif value_choice == 400
# 	   #  @response_400 = HTTParty.get("http://jservice.io/api/clues?value=400")
#     # elsif value_choice == 500
# 	   #  @response_500 = HTTParty.get("http://jservice.io/api/clues?value=500")
#     # elsif value_choice == 600
# 	   #  @response_600 = HTTParty.get("http://jservice.io/api/clues?value=600")
#     # elsif value_choice == 700
# 	   #  @response_700 = HTTParty.get("http://jservice.io/api/clues?value=700")
#     # elsif value_choice == 800
# 	   #  @response_800 = HTTParty.get("http://jservice.io/api/clues?value=800")
#     # elsif value_choice == 900
# 	   #  @response_900 = HTTParty.get("http://jservice.io/api/clues?value=900")
#     # elsif value_choice == 1000
# 	   #  @response_1000 = HTTParty.get("http://jservice.io/api/clues?value=1000")
#     end


#   end

end

