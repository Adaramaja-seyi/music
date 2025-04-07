
const playlists = [
  {
    title: "Sweet Dreams",
    artist: "Eurythmics",
    duration: "4:54",
    genre: "Pop",
  },
  {
    title: "Sweet love",
    artist: "wizkid",
    duration: "5:40",
    genre: "Afro beat",
  },
  { title: "See You", artist: "Simi", duration: "6:54", genre: "hip Pop" },
  { title: "Life", artist: "Gold", duration: "4:54", genre: "Rock" },
];
console.table(playlists);

playlists.forEach((play, index) => {
  console.table(
    `${index + 1} New Playlist ${play.title} by ${play.artist} duration ${
      play.duration
    } - Genre ${play.genre} `
  );
});

const rockSong = playlists.filter((playlists) => playlists.genre === "Rock");
// const duartion = playlists.filter(playlist =>Number(playlist.duration === "5:40") )
// const rockSong = playlists.filter(showSong);
// function showSong(playlist) {
//     if (playlist.genre === "Rock")
//         return playlist
// }
console.table(rockSong);

const duration = playlists.filter(time);
function time(playlists) {
  if (playlists.duration >= "5:00") {
    return playlists;
  }
}
console.table(duration);

const upperCasePlaylist = playlists.map(song);
function song(playlist) {
  return {
    title: playlist.title.toUpperCase(),
    artist: playlist.artist.toUpperCase(),
    // playCount: playlist.playCount = 0
    playCount: 0,
  };
}
console.table(upperCasePlaylist);

function formatDuration(duration) {
  const part = duration.split(":")
  // console.log(part);
  const minute = part[1];
  const seconds= part[0];
   return `${minute} minute(s) and  ${seconds} second(s)`
}


playlists.forEach(playlist => {
  const format = formatDuration(playlist.duration);
  console.table(`${playlist.title}: ${format}`)
});



function findSong(searchTerm) {
  const search = searchTerm.toLowerCase()
  const result= playlists.filter(music => 
    music.artist.includes(searchTerm) || music.title.includes(searchTerm)
  )
  // console.table(search)
  return result
}
console.log(findSong("Simi"))
// console.table(findSong("Eurythmics"));


function durationToSeconds(duration) {
  const [mins, secs] = duration.split(":").map(Number);
  // console.log(`${mins} ${secs}`);
  
  return mins * 60 + secs;
}

// Sort by title
const byTitle = [...playlists].sort((a, b) => a.title.localeCompare(b.title));
console.log("Sorted by title:");
console.table(byTitle);

// Sort by duration
const byDuration = [...playlists].sort((a, b) => {
  return durationToSeconds(a.duration) - durationToSeconds(b.duration);
  // Returns a negative number if a is shorter, positive if b is shorter
});
console.log("Sorted  by duration:");
console.table(byDuration);


function playRandomSong() {
  const randomIndex = Math.floor(Math.random() * playlists.length);
  const song = playlists[randomIndex];
  console.log(`Now playing a random song: ${song.title} by ${song.artist}`);
}
playRandomSong();