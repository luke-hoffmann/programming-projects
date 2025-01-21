$("#page").css("width", $(document).width()-30)
$("#page").css("height", $(document).height()-20)
console.log($(document).height() +'px')
$(window).resize(function() {
  $("#page").css("width", $(document).width()-30)
  $("#page").css("height", $(document).height()-20)

})


