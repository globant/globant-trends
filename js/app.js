$(document).foundation({
    offcanvas : {
        // Sets method in which offcanvas opens.
        // [ move | overlap_single | overlap ]
        open_method: 'move'
    }
});


$('.off-canvas-wrap').on('click', function (e) {
    e.preventDefault();
    $(this).foundation('offcanvas', 'hide', 'offcanvas-overlap-left');
    $(this).foundation('offcanvas', 'hide', 'offcanvas-overlap-right');
});


 function toggleModal(element) {
     element.toggleClass('hide');
 }

 $('.modal-trigger').on('click', function(e) {
     var $modalElement = $(this).closest('.slide-panel').next();

     e.preventDefault();
     toggleModal($modalElement);
 });

 $('.close-modal').on('click', function(e) {
     var $modalElement = $(this).parent();

     e.preventDefault();
     toggleModal($modalElement);
 });