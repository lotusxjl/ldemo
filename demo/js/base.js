/*
* @Author: U
* @Date:   2018-04-19 14:21:04
* @Last Modified by:   U
* @Last Modified time: 2018-04-25 15:47:17
*/
var COLORS = {
    default: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    light: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
    dark: ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42']
};

// Params parser
var params = {};

$('#theme .' + (params.theme || 'default')).addClass('selected');
if (params.theme === 'dark') {
    $('#theme').addClass('dark');
}

// Add popover
$('#theme a').popover({
    html: true,
    content: function () {
        var theme = $(this).attr('class').replace('selected', '').trim();
        return '<div class="theme-palette ' + theme + '">'
            + COLORS[theme].map(function (color) {
                return '<span style="background-color:' + color + '"></span>'
            }).join('')
            + '</div>';
    },
    placement: 'bottom',
    trigger: 'hover'
});
$(document).ready(function(){
	 // chart nav highlighting as scrolling
    var waypoints = $('.chart-header').waypoint(function (direction) {
        var names = this.element.id.split('-');
        if (names.length === 1) {
            $('.left-nav li').removeClass('active');
            $('.chart-' + names[0]).parent('li').addClass('active');
        }
    }, {
        offset: 70
    });

    window.addEventListener('hashchange', function () {
        // be hidden when goes to hash tag
        scrollBy(0, -80);

        // changes highlighting as hash tag changes
        var names = location.hash.split('-');
        if (names.length === 1) {
            $('.left-nav li').removeClass('active');
            $('.chart-' + names[0]).parent('li').addClass('active');
        }
    });

    // highlight the first chart in chart navbar
    $('.left-nav li').first().addClass('active');
});