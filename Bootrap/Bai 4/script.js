$(document).ready(function(){
  $("ul").find("span").css({"color": "red", "border": "2px solid red"});
});
$(document).ready(function(){
  $("button").click(function(){
    $("#mn1").toggle();
  });
});
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#box").animate({height: "300px"});
  });
  $("#btn2").click(function(){
    $("#box").animate({height: "100px"});
  });
});
$(document).ready(function(){
  $(".btn3").click(function(){
    $("#mn3").fadeOut()
  });
  $(".btn4").click(function(){
    $("#mn3").fadeIn();
  });
});
$(document).ready(function(){
  $(".btn5").click(function(){
    $("#mn4").slideUp();
  });
  $(".btn6").click(function(){
    $("#mn4").slideDown();
  });
});
$(document).ready(function(){
  $("#btn7").click(function(){
    $("#mn5").append(" <b>Appended text</b>.");
  });
  $("#btn8").click(function(){
    $("#ol").append("<li>Appended item</li>");
  });
});
$(document).ready(function(){
  $("#btn9").click(function(){
    $("#mn6").prepend("<b>Prepended text</b>. ");
  });
  $("#btn10").click(function(){
    $("#ol1").prepend("<li>Prepended item</li>");
  });
});
$(document).ready(function(){
  $("#mn7").on("click", function(){
    $(this).css("background-color", "pink");
  });
  $("#men7").on("click", function(){
    $(this).css("background-color", "pink");
  });
  $("#btn11").click(function(){
    $("#men7").off("click");
  });
  $("#btn11").click(function(){
    $("#mn7").off("click");
  });
});
$(document).ready(function(){
  $("#btn12").click(function(){
    $("#mn8").attr("width", "500");
  });
});
$(document).ready(function(){
  $("#btn13").click(function(){
    $("input:text").val("Viễn");
  });
});
$(document).ready(function(){
  $("#btn14").click(function(){
    $("#mn10").text("Hello world!");
  });
});
$(document).ready(function(){
  $("#btn15").click(function(){
    $(".li").each(function(){
      alert($(this).text())
    });
  });
});