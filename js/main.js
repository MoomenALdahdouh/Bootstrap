/*Featured work shuffle*/
$(function () {
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all'){
            $('.shuffle-images .col-md').css('opacity',1);
        }else {
            $('.shuffle-images .col-md').css('opacity',0.08);
            $($(this).data('class')).parent().css('opacity',1);
        }
    });
});