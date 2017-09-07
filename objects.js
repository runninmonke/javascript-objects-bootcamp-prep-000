<<<<<<< HEAD
var playlist = {'Phil Ochs': "Here's to the State of Nebraska"};
=======
var playlist = {'Phil Ochs': "Here's to the State of Mississippi"};
>>>>>>> 18057e67a9a9fa98f12f3bc0aadd61b75dc11b7f

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
