$(document).ready(function(){
    var visible = false;

    var slideCount = $('#slider div.slides div.slide').length;

    var slideWidth = $('#slider div.slides div.slide').width();
    var slideHeight = $('#slider div.slides div.slide').height();
    
    $('#slider').css({width:slideWidth, height:slideHeight});
    $('#slider div.slides').css({width:slideWidth * slideCount, marginLeft: -slideWidth})

    $('#containSlider').hide();
 

    $('#laquo').click(function(){
        $('#slider div.slides').animate({left:+slideWidth},1000,function(){
            $('#slider div.slides div.slide div.slide:last-child').prependTo('#slider div.slides');
             $("#slider div.slides").css('left', '');
        })

    });

    $('#raquo').click(function(){
        $('#slider div.slides').animate({left: -slideWidth},1000,function(){
            $('#slider div.slides div.slide div.slide:last-child').appendTo('#slider div.slides');
             $("#slider div.slides").css('left', '');
        })
    });


});