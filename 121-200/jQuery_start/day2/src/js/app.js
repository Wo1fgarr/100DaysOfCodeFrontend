$(document).ready(function() {
  console.log('ready!');

  // $('.hide-me').hide();
  // $('p:first').hide();
  // $(".btn").click(function() {
  //   $("p").hide(3000);
  // });

  // $(".btn").click(function() {
  //   $("p:first").toggle("slow");
  // });

  // $(".btn").click(function() {
  //   $("p:first").fadeTo("fast", 0.2);
  // });

  // $(".btn").click(function() {
  //   $("p:first").slideToggle("slow");
  // });

  $(".btn_").click(function() {
    $(".animate-me").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    }, 
      "slow"
    );
  });





});