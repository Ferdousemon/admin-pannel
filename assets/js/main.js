// =================left sidebar=============

$(document).on('click', '#sidebar li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});
// =================left sidebar end=============



// =============left menu sidebar dp toggle============

$('.sub-menu ul').hide();
$('.sub-menu a').click(function(){
    $(this).parent('.sub-menu').children('ul').slideToggle('100');
    $(this).find('.right').toggleClass('fa-caret-up fa-caret-down');
});
// =============left menu sidebar dp toggle end============





// ================sidebar toggle==================

$(document).ready(function(){
    $('#toggleSidebar').click(function(){
        $('.left-menu').toggleClass('hide');
        $('.content-wrapper').toggleClass('hide');
    });
});
// ================sidebar toggle end==================