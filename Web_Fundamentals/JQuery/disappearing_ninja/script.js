$(document).ready(function(){

    console.log("Ready!");

    for (var i = 1; i < 9; i++) {
        $("#img_div").append('<img src="images/catandninja.png" alt="ninja pic">');
      }

    attach_handlers();

 });  

 function attach_handlers(){
 
    $('#restore').click(function(){
        $('img').show();
    });


     $('img').click(function(){
        $(this).slideUp();
    });
 }

   
