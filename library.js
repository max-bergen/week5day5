class library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
}

class playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
    this.totalDuration = 0;
    this.totalRating = 0;
    this.totalTracks = 0;
  }
}

class track {
  constructor(title, rating, duration) {
    this.title = title;
    this.rating = rating;
    this.duration = duration;
  }
}

function addPlaylist(library, playlist) {
  let playlistArr = library.playlists;
  let playlistKey = library.playlists.length;
  let playlistObj = playlist;
  playlistArr[playlistKey] = playlistObj;
}

function addTrack(playlist, track) {
  playlist.tracks[playlist.tracks.length] = track;
  playlist.totalDuration += track.duration;
  playlist.totalRating += track.rating;
  playlist.totalTracks = playlist.tracks.length;
}

const library1 = new library('library1', 'Max');
const library2 = new library('library2', 'Xam');
const playlist1 = new playlist('playlist1');
const playlist2 = new playlist('playlist2');
const track1 = new track('track1', 5, 10);
const track2 = new track('track2', 3, 100);
const track3 = new track('track3', 1, 1000);

addTrack(playlist1, track1);
addTrack(playlist1, track2);
addTrack(playlist1, track3);
//addTrack(playlist2, track2);
//addPlaylist(library1, playlist1);

console.log(playlist1);
//console.log(playlist2);
//console.log(library1);

