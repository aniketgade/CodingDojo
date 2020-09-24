$(document).ready(function(){

    console.log("Ready!");

    $('img').click(function(){

        console.log($(this).attr('otherImg'));

        var other_img = $(this).attr('otherImg');
        var img_src = $(this).attr('src');
        $(this).attr('src',other_img);
        $(this).attr('otherImg',img_src);

    });

 });