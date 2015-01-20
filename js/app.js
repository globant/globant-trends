$(document).ready(function(){

    var $document = $(this),
        $body = $('body');

    $document.foundation({
        offcanvas : {
            // Sets method in which offcanvas opens.
            // [ move | overlap_single | overlap ]
            open_method: 'move'
        }
    });

    var inDuration = 1500;
    if(typeof $body.data('in-duration') !== 'undefined'){
        inDuration = parseInt($body.data('in-duration'),10);
    }
    console.log('inDurarion',inDuration);
    $body.animsition({

        inClass               :   'fade-in',
        outClass              :   'fade-out',
        inDuration            :    1500,
        outDuration           :    1500,
        linkElement           :   '.animsition-link',
        // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
        loading               :    false,
        loadingParentElement  :   'body', //animsition wrapper element
        loadingClass          :   'animsition-loading',
        unSupportCss          : [ 'animation-duration',
            '-webkit-animation-duration',
            '-o-animation-duration'
        ],
        //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

        overlay               :   false,

        overlayClass          :   '',
        overlayParentElement  :   'body'
    });

    $('[data-page-name="index"]').indexPage();

    $('[data-page-name="video"]').videoPage();

    $('[data-page-name="interview"]').interviewPage();

});
