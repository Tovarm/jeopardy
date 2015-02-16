# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Question.destroy_all
Contestant.destroy_all


Question.create({question_id: 27862, category_title: "bird words", value: 300, contestant_id: 1})
Question.create({question_id: 68782, category_title: "the art world", value: 800, contestant_id: 2})


Contestant.create({fname: "Sylvia", lname: "Blender", email: "sylvib@gmail.com", password_digest: "password", running_score: 1200, total_score: 1200})
Contestant.create({fname:"Daniel", lname: "Scarry", email: "scarydanny@gmail.com", password_digest: "password", running_score: 600, total_score: 1000})