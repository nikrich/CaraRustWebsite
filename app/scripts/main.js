/*
 *  Menu navigation
 */

$('#explore').click(function () {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 500);
});

$(document).ready(function() {
    var video = $('#video');

    if (video.length !== 0) {
        var src = video.attr('src');
      video.attr('src', src.replace('{0}', getParameterByName('id')));
    }
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}