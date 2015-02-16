
  $(document).ready(function(){
  $("#capsule").draggable();
  $("#dressing_gown").draggable();
  $("#toothbrush").draggable();
  $("#towel").draggable();
  $("#stick-man").draggable();
  $("#bulldozer").draggable();
  $("#ufo").draggable();
  $("#dont_panic").draggable();
  $("#worried").draggable();


	var leftBorder = 1000;
	var rightBorder = 1000;
	var topBorder = 100;


	ufo.style.left = rightBorder + 'px';
	var position = rightBorder;
	var walkingLeft = true;

	setInterval(function(){
		//break down this ternary operator for the class
	  position = walkingLeft ? (position -2) : (position +2);
	  ufo.style.left = position + 'px';
	  if (position < 200 || position > 700){
	    walkingLeft = !walkingLeft;
	    ufo.classList.toggle('flip');
	  }
	}, 50);


	console.log('jeopardy api called')
	$.ajax({
    url: 'jservice.io/api/categories',
  }).done(function(data) {
  	console.log(data);
  	
  	  });
});







