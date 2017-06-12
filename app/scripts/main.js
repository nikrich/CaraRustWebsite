/*
 *  Menu navigation
 */

$('#explore,#btnAbout').click(function () {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 500);
});

$('#btnWork').click(function () {
    $('html, body').animate({
        scrollTop: $('#work').offset().top
    }, 500);
});

$('#btnContact').click(function () {
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 500);
});

//$('iframe').load(function (handler) {
//    console.log(handler);
//    $(handler.target).contents().find('.ytp-thumbnail-overlay-image').addClass('crop');
//});