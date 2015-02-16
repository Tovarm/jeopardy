console.log("js loaded!")

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

var $level1_btn = $('#level1_btn')
// var $level2_btn = $('#level2_btn')
// var $level3_btn = $('#level3_btn')
// var $level4_btn = $('#level4_btn')
// var $level5_btn = $('#level5_btn')
// var $level6_btn = $('#level6_btn')
// var $level7_btn = $('#level7_btn')
// var $level8_btn = $('#level8_btn')
// var $level9_btn = $('#level9_btn')
// var $level10_btn = $('#level0_btn')

//eventlistener


$level1_btn.on("click", function(){
  console.log("$100 button clicked")
    // $.ajax({
    //   url: '/games',
    //   method: 'GET',
    //   dataType: 'json'
    // }).done(function(data) {
    //   console.log(data)
    // })  
});
