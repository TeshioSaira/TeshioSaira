var flamePos = jQuery('#flame').offset().top;
var flameHeight = jQuery('#flame').outerHeight();
jQuery(window).on('scroll', function(){
    if(jQuery(this).scrollTop() > flamePos){
        jQuery('body').css('padding-top', flameHeight);
        jQuery('#flame').addClass('fixed');
    }else{
        jQuery('body').css('padding-top', 0);
        jQuery('#flame').removeClass('fixed');
    }
})