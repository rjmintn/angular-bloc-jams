(function() {
    
    function AlbumCtrl() {
        this.albumData = albumPicasso;
        this.songs = [];
        for (var i = 0; i < this.albumData.songs.length; i++) {
            this.songs.push(this.albumData.songs[i]);
        }

    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
        
})();

