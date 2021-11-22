// $("p").hover(function(){
//     $(this).css("background-color", "yellow");
//     }, function(){
//     $(this).css("background-color", "pink");
//   });
$(document).ready(function() {

 $("#design").click(function(){
      $("#design-showing").toggle();
      $(".hide-design-image").toggle();
    })
  
    $("#development").click(function(){
      $("#development-showing").toggle();
      $(".hide-development-image").toggle();
    })
  
    $("#productManagement").click(function(){
      $("#product-management-showing").toggle();
      $(".hide-product-management").toggle();
    })
  
    //Insert white box upo hover
    $(".Hover").hover(function(){
      $(this).animate({opacity:'1'});
    },
    function(){
      $(this).animate({opacity:'0'});
    })
    $(document).ready(function(){
      $(document).ready(function(){
        $("form#form34A").submit(function(event){
          // event.preventDefault();
          var name = $("input#MERGE1").val();
          var email = $("input#MERGE0").val();
          var message = $("textarea#comment").val();
          if ($("input#MERGE1").val() && $("input#MERGE0").val()){
            alert (name + ", we have received your message. Thank you for reaching out to us.");
          }
          else {
            alert("Please enter your name and email!");
          }
        });
      });
    });
  });