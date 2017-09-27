/*
 * @author Armando Ricardo Nogueira - armandoricky@gmail.com 
 */
$(document).on('click', '.show-extra-info', function (e) {
    $(this).parents('.armrck-tiles.stats').find('.extra-content').toggle();
});