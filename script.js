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
  { title: " See you",
     artist: "Simi",
      duration: "6:54", 
      genre: "hip Pop"
    },
  { title: "life",
     artist: "Gold",
      duration: "4:54", 
      genre: "Rock"
     },
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


const durations= "4:45";
const part = durations.split(":")
const minute = [1];
const seconds= [0]
function timer(duartions) {
  return `${minute} minute and second ${seconds}`;
}
playlists.forEach(playlists => {
  const format= timer(playlists.duration);
  console.table(`${song.title}: ${format}`)
});



function findSong(searchTerm) {
  const search = searchTerm.toLowerCase()
  playlists.filter(music => {
    music.artist.includes() || music.title.includes()
  })
  console.table(search)
}
findSong("Eurythmics")
// console.table(findSong("Eurythmics"));


function durationToSeconds(duration) {
  const [mins, secs] = duration.split(":").map(Number);
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
console.log("Sorted by duration:");
console.table(byDuration);



function playRandomSong() {
  const randomIndex = Math.floor(Math.random() * playlists.length);
  const song = playlists[randomIndex];
  console.log(`Now playing a random song: ${song.title} by ${song.artist}`);
}
playRandomSong();