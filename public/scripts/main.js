console.log("in main.js")

if (typeof jQuery.ui == 'undefined') {
    console.log("ui not loaded");
}


$(function() {
  $( "#view-more-present" ).click(function(event)
  {
    $(".about-present-hidden").removeClass("about-present-hidden").addClass("about-present-inline");
    $("#view-more-present").hide();
  });
  $( "#view-less-present" ).click(function(event)
  {
    $(".about-present-inline").removeClass("about-present-inline").addClass("about-present-hidden");
    $("#view-more-present").show();
  });

  $( "#view-more-past" ).click(function(event)
  {
    $(".about-past-hidden").removeClass("about-past-hidden").addClass("about-past-inline");
    $("#view-more-past").hide();
  });
  $( "#view-less-past" ).click(function(event)
  {
    $(".about-past-inline").removeClass("about-past-inline").addClass("about-past-hidden");
    $("#view-more-past").show();
  });

  $( "#view-more-future" ).click(function(event)
  {
    $(".about-future-hidden").removeClass("about-future-hidden").addClass("about-future-inline");
    $("#view-more-future").hide();
  });
  $( "#view-less-future" ).click(function(event)
  {
    $(".about-future-inline").removeClass("about-future-inline").addClass("about-future-hidden");
    $("#view-more-future").show();
  });
});