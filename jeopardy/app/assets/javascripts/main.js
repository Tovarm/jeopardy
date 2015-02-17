console.log("js loaded!");

$( document ).ready(function() {

var $hidden_answer = $('.hidden_answer');
var $submit = $('#submit_answer_button');
var $user_answer = $("#user_answer");
var $value = $('.value')

$($hidden_answer).hide();
$('.individual_question').hide();


// if the class name of $whole_question matches the class name of $individual_question, show question upon clicking $whole_question
$('.whole_question').on('click', function(){
  console.log("question clicked")
  console.log($('.individual_question').children().attr('class'))
  if($('.individual_question').is (":hidden")){ 
  console.log($(this).children().attr('class'))
      if($(this).children().attr('class') === $('.whole_question').children().attr('class')){
      $($(this).children()).slideDown();
  } else {
    console.log("classes do not match")
      }
    }
});

  

// event listener for user submitting an answer
$submit.on('click', function(){
  // console.log($user_answer.val());
  // console.log($hidden_answer.text());
  if (($hidden_answer).is(":hidden")){
    ($hidden_answer).slideDown();
  } else {
    ($hidden_answer).slideUp();
  }
});


$submit.on('click', function(){

console.log("_----------------------------------------_")
  if($value.attr('class') === $(this).attr('class')){
    console.log(($value).children().attr('class'))
  } else {
    console.log(('.whole_question').children().attr('class'))
  }
console.log("_----------------------------------------_")
})


var running_score = 0
console.log(running_score)
var total_score = 0
console.log(total_score)

console.log($value.text());
  running_score = running_score + parseInt($value.val(), 10);

  // running_score = running_score - parseInt($value.val(), 10);


// adding to/ subtracting from running score
// if($user_answer === $hidden_answer){
//   running_score = running_score + parseInt($value.val(), 10);
// } else if($user_answer != $hidden_answer){
//   running_score = running_score - parseInt($value.val(), 10);
// } else {
//   running_score
// }




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




})