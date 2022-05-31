$(document).ready(function(){

    $('.collapsible').collapsible();

    $('.dropdown-trigger').dropdown(
        {
            'hover': true,
            'coverTrigger': false,
        });

    $('.showbar').hide();

    $('.hidebar').on('click',function(){

        $('.sidebar').css('width','0');
        $('.showbar').toggle();
        $('.side-content').toggle();
    })

    $('.showbar').on('click', function(){

        $('.sidebar').css('width','240px');
        $('.showbar').toggle();

        setTimeout(function(){

            $('.side-content').toggle();
            
        },300)

    })
    

})
