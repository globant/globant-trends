$(document).foundation({
    offcanvas : {
        // Sets method in which offcanvas opens.
        // [ move | overlap_single | overlap ]
        open_method: 'move'
    }
});


$('.off-canvas-wrap').on('click', function (e) {
    e.preventDefault();
    $(this).foundation('offcanvas', 'hide', 'move-left');
    $(this).foundation('offcanvas', 'hide', 'move-right');
});

$(document).on('open.fndtn.offcanvas', '[data-offcanvas]', function () {
    $(this).children('.inner-wrap').addClass('off-canvas-open');
});

$(document).on('close.fndtn.offcanvas', '[data-offcanvas]', function () {
    $(this).children('.inner-wrap').removeClass('off-canvas-open');
});


 function toggleModal(element) {
     element.toggleClass('hide');
 }

 $('.modal-trigger').on('click', function(e) {
     var $modalElement = $(this).siblings('.flex-video');
     e.preventDefault();
     toggleModal($modalElement);
 });

 $('.close-modal').on('click', function(e) {
     var $modalElement = $(this).parent();

     e.preventDefault();
     toggleModal($modalElement);
 });