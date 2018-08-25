$(document).ready(function() 
{
  // Coming Later Popup
  $(".coming_later").click(function()
  {
    swal(
      {
        title: "Coming Later",
        text: "Thanks for your interest!",
        icon: "warning",
        button: "OK"
      });
  });

  // Fix following-menu when passed
  $(".masthead").visibility(
    {
      once: false,
      onBottomPassed: function() 
      {
        $(".fixed.menu").transition("fade in");
      },
      onBottomPassedReverse: function() 
      {
        $(".fixed.menu").transition("fade out");
      }
    });

  // Create sidebar and attach to menu open
  $(".ui.sidebar").sidebar("attach events", ".toc.item");
});