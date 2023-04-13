$(document).ready(function(){

  $("#modal-container").hide()

	$("#login").click(function() {
		$("#modal-container").show()
	})

  $("#submit").click(function() {
    $("#modal-container").hide()
    user = $("#user").val()
    $("#login").text(user)
  })
  
	$("#cancel").click(function() {
		$("#modal-container").hide()
	})

	$("#modal-overlay").click(function() {
		$("#modal-container").hide()
	})
	
	$("#submit").click(function(){
		$("#user").data("user", $("#user").html());
		user = $("#user").data("user");
		$("#nav1").html(user);
	})

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll >= 500){
      $("#navbar").css({"background-color":"white"})
      $("#navbar").css({"opacity":"100%"})
    }else if(scroll < 500){
      $("#navbar").css({"background-color":"transparent"})
      $("#navbar").css({"opacity":"90%"})
    }
  $("#carousel-next").click(function() {

    scroll = parseInt($('#carousel').css('margin-left').replace("px", ""));
    console.log(scroll)

    if(scroll == -2400){
      return false
    } else {
      $("#carousel").css('margin-left',scroll - 1200)
    }
  })
  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function() {

    scroll = parseInt($('#carousel').css('margin-left').replace("px", ""));
    console.log(scroll)

    if(scroll == 0){
      return false
    } else {
      $("#carousel").css('margin-left',scroll + 1200)
    }
  })
  $("#carousel-next-veg").click(function() {

    scroll = parseInt($('#carousel-veg').css('margin-left').replace("px", ""));
    console.log(scroll)

    if(scroll == -2400){
      return false
    } else {
      $("#carousel-veg").css('margin-left',scroll - 1200)
    }
  })
  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev-veg").click(function() {

    scroll = parseInt($('#carousel-veg').css('margin-left').replace("px", ""));
    console.log(scroll)

    if(scroll == 0){
      return false
    } else {
      $("#carousel-veg").css('margin-left',scroll + 1200)
    }
  })
});

});