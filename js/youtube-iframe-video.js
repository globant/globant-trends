// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
var player;
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady () {
    var container;
    var videoId;
    var iframeVideo;

    $('.modal-trigger').on('click', function (e) {
        e.preventDefault();
        container = $(this).closest('.slide-panel').next().children('.player-video').attr('id');
        videoId = $(this).closest('.slide-panel').next().children('.player-video').attr('data-video');
        iframeVideo = 'iframe#' + container;
        playerVideo(container, videoId);
    });

    function playerVideo (container, videoId) {
        player = new YT.Player(container, {
            playerVars: {
              'showinfo': 0,
              'theme': 'light',
              'rel': 0
            },
            videoId: videoId,
            events: {
                'onReady': onPlayerReady
            }
        });

        $('.close-modal').one('click', function (event) {
            event.preventDefault();
            $(iframeVideo).attr('src', $(iframeVideo).attr('src'));
        });
    }

}

// The API will call this function when the video player is ready.
function onPlayerReady() {


}