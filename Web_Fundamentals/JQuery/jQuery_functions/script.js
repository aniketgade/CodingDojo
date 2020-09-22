$(document).ready(function(){

    console.log("Ready!");

    $('#addClass').click(function(){
        $('#paragraph1').attr("class", "red");
    });

    $('#hide').click(function(){
        
        $('#paragraph_hide').hide();
    })

    $('#show').click(function(){
        $('#paragraph_hide').show();
    })

    $('#toggle').click(function(){
        $('#paragraph_hide').toggle();
    })

    $('#append_btn').click(function(){

        var user_input = $('#inputBox').val();
        console.log(user_input);

        $('#menu').append('<li>' + user_input + '</li>');

        $('#inputBox').val('');
    })

    $('#slide_up_btn').click(function(){
        $('#slide_down').slideUp();
    });

    $('#slide_down_btn').click(function(){
        $('#slide_down').slideDown();
    });

    $('#slide_toggle_btn').click(function(){
        $('#slide_down').slideToggle();
    });

    $('#fade_in_btn').click(function(){
        $('#fade_in').fadeIn();
    })

    $('#fade_out_btn').click(function(){
        $('#fade_in').fadeOut();
    })

    $('#before').click(function(){
        $('#before_after').before("<p>This is Before</p>");
    })

    $('#after').click(function(){
        $('#before_after').after("<p>This is After</p>");
    })

    $('#html').click(function(){
        $('#html_and_text').html("<h1>This is Html<h1>");
    })

    $('#text').click(function(){
        $('#html_and_text').text("This is Text");
    })

})