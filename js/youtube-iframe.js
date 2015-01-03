// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: $('#player').attr('data-video'),
        events: {
            'onReady': onPlayerReady
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady() {
    // bind events
    var playButton = $('.close-modal');
    playButton.on("click", function(e) {
        e.preventDefault();
        player.stopVideo();
        $(this).parent().toggleClass('hide');
    });

}