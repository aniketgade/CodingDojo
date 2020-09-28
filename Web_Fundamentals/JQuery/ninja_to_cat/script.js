$(document).ready(function(){

    console.log("Ready!");
    
    var clicked = false;

    // how to optimize the below code which is repeating, if I put this block in a function , then it doesn't work
    // also, how to disable hover out when the img is clicked, to improve visual experience

    $('img').click(function(){

        clicked = true;

        let other_img = $(this).attr('otherImg');
        let img_src = $(this).attr('src');

        $(this).attr('src',other_img);
        $(this).attr('otherImg',img_src);
    });

    $('img').hover(function(){
        let other_img = $(this).attr('otherImg');
        let img_src = $(this).attr('src');

        $(this).attr('src',other_img);
        $(this).attr('otherImg',img_src);
    }, 
    function(){
        
        let other_img = $(this).attr('otherImg');
        let img_src = $(this).attr('src');

        $(this).attr('src',other_img);
        $(this).attr('otherImg',img_src);
    })


 });

 