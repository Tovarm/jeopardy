console.log("js loaded!");

$( document ).ready(function() {

var $whole_question = $('.whole_question');
var $body = $('body');
var $hidden_answer;
var $submit = $('.submit_answer_button');
var $new_game = $('#new_game');
var $value;
var counter = 5
var $which_round = $('#which_round').text(counter + " ");
var $user_answer;
var running_score = 0;
var total_score = 0;

console.log("round is currently:" + $which_round.text());

$('.reveal_answer').hide();
$('.hidden_answer').hide();
$('.individual_question').hide();

// event listener to show question corresponding to the question mask clicked
$('.whole_question').on('click', function(){
  $user_answer = $(this).find('input');
  $hidden_answer = $(this).find('.hidden_answer');
  $value = $(this).find('.value_id');
  var hidden_answer = $.trim($hidden_answer.text().toLowerCase());
  console.log(hidden_answer);
  if($('.individual_question').is (":hidden")){ 
    $($(this).children()).slideDown();
    $hidden_answer.hide();
  } else {
    console.log("question not shown")
  }  
});

// each time user submits a wrong answer, counter increments by 1
$('.submit_answer_button').on('click', function(){
  // var $user_answer = $(this).find('input').val();
  // verify that an answer was entered
  var user_answer = $.trim($user_answer.val().toLowerCase());
  var hidden_answer = $.trim($hidden_answer.text().toLowerCase());

  console.log(hidden_answer);
  console.log(user_answer);
// ------------------------------------------------------------
// function for what happens when user gets an answer right
function right_answer(){
  alert("You got it right and earned " + $value.text());
  console.log("correct!");

  var dollar_amount = $value.text().replace("$", "");
  running_score = running_score + parseInt(dollar_amount, 10);
  $('#running_score').text(running_score);
  console.log(running_score);

  $('#reveal_answer').append('<p>' + hidden_answer.toUpperCase() + '</br>Nice job! You just earned ' + $value.text() + '</p>').addClass('reveal_answer_right')
  $('#reveal_answer').show();
}
// ------------------------------------------------------------

  if(user_answer === ""){
   console.log("Come on, take a guess")
  } 
  //----- else if(user_answer === hidden_answer) { -----
    else if(user_answer.localeCompare(hidden_answer) === 0){
      right_answer();
    } else if(hidden_answer.indexOf(user_answer) > 0){
      right_answer();

    } else if(user_answer != hidden_answer | user_answer.localeCompare(hidden_answer != 0 | hidden_answer.indexOf(user_answer) > 0)) {
    alert("You got it wrong and lost " + $value.text() +". The correct answer was " + hidden_answer);
    console.log("WRONG!!");
    var dollar_amount = $value.text().replace("$", "");
    running_score = running_score - parseInt(dollar_amount, 10);
    counter--;
    
    $('#which_round').text(counter + " ");
    console.log($('#which_round').text());
    
    $('#reveal_answer').append('<p>' + user_answer.toUpperCase() + '</br>Sorry, wrong answer. You\'ve lost ' + $value.text() + '. The right answer was ' + hidden_answer + '.</p></br>').addClass('reveal_answer_wrong')
    $('#reveal_answer').show();
    
    if(counter === 0){
      alert("GAME OVER");
      console.log("GAME OVER!");
      $('#status').text("Sorry, game over. You should read the encyclopedia more often.");
      counter = 5;
    } 
  }
})

// ajax call to server to get new batch of questions
  $('#new_game').on('click', function() {
    console.log("new game button clicked");
      $.ajax({
        method: 'GET',
        url: '/games'
      }).done(function(data){
        console.log(data);
        $('.whole_question').empty();
        for(var i = 0; i < $whole_question.length; i++ ){
          $('.whole_question').append(data[i])
        }
      })


  // ajax post score to db
    // $.ajax({
    //   url: '/games',
    //   method: 'POST',
    //   dataType: 'json',
    //   data: JSON.stringify({score: running_score})
    // }).done(function(data){
    //   console.log(data)
    // })
  })


// function postToDb(attrs){
//   console.log("hit postToDb!");
//   $.ajax({
//     url: '/entries',
//     method: 'POST',
//     dataType: 'json',
//     data: JSON.stringify(attrs)
//   }).done(function(data) {
//     console.log(data);  
//     postToDom(data);
//   totalMoney = 0
//   getTotalOwed();
//   });
// }






  // tell user whether answer is right or wrong.
  //   if right
        // add value to running score
  //     reveal correct answer, colored in green
  //   if wrong
  //      subtract value from running score
  //     counter decreases by 1
  //     reveal correct answer, colored in red
  //        and counter = 0:
        //  display game over
            // display running score and post to post to database
            // display total score and post to database


 
});



// $('.submit_answer_button').on('click', function(){

// console.log("_----------------------------------------_")
//   if(($value).attr('class') === $('.whole_question').attr('class')){
//     console.log("they match!")
//   } else {
//     console.log("no match")
//   }
// console.log("_----------------------------------------_")
// })




  // running_score = running_score - parseInt($value.val(), 10);


// adding to/ subtracting from running score





// function postToDb(attrs){
//   console.log("hit postToDb!");
//   $.ajax({
//     url: '/entries',
//     method: 'POST',
//     dataType: 'json',
//     data: JSON.stringify(attrs)
//   }).done(function(data) {
//     console.log(data);  
//     postToDom(data);
//   totalMoney = 0
//   getTotalOwed();
//   });
// }

  //     $.ajax({
  //       url: '/games',
  //       method: 'GET',
  //       dataType: 'json'
  //     }).done(function(data) {
  //       console.log(data)
  //     })  
  // });
