var un_mute = document.getElementById('un-mute');
document.getElementById('music-toggle').addEventListener('mousedown', function(e) {
        var musicControl = document.getElementById('audioplayer');
        if(musicControl.paused) {
            document.getElementById('music-toggle').classList.remove('music-toggle-inactive');
            musicControl.play();
        } else {
            document.getElementById('music-toggle').classList.add('music-toggle-inactive');
            musicControl.pause();
        }
        e.stopPropagation();
}, true);
