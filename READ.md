Step 1: Create the Initial Playlist
- Objective: Create an array called `playlist` with at least 5 song objects. Each song should have these properties:
  - `title` (string): Song name.
  - `artist` (string): Artist name.
  - `duration` (string): Duration in "minutes:seconds" format (e.g., "3:45").
  - `genre` (string): Genre (e.g., "Pop", "Rock", "Hip-Hop").

- Example

  const playlist = [
	{ title: "Sweet Dreams", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
  ];

- Task: Display the playlist using `console.table(playlist)`.


Step 2: Loop Through the Playlist
-Objective: Use a `for`, `while`, or `for...of` loop to log a formatted string for each song.

- **Example Output**:  
  `"Now playing: Sweet Dreams by Eurythmics (4:54) - Genre: Pop"`
- **Challenge**: Try a loop type you’re less familiar with!


Step 3: Filter Songs with Array Methods
- **Objective**: Use `.filter()` to create an array called `rockSongs` with only "Rock" genre songs.
- **Task**: Display `rockSongs` using `console.table`.
- **Task**: Filter songs with a duration longer than 5 minutes.



Step 4: Modify Songs with Array Methods
- **Objective**: Use `.map()` to create an array called `upperCasePlaylist` where `title` and `artist` are in uppercase (use `.toUpperCase()`).
- **Task**: Display the new array with `console.table`.
- **Task**: Add a `playCount: 0` property to each song in the mapped array.



Step 5: String Manipulation
- **Objective**: Write a function `formatDuration` that converts a song’s `duration` (e.g., "4:54") to a string like `"4 minutes and 54 seconds"`. Use `.split()` and logic.
- **Task**: Use a loop or `.forEach()` to log the formatted duration for each song.


Step 6: Search the Playlist
- **Objective**: Write a function `findSong(searchTerm)` that finds songs where `title` or `artist` includes the `searchTerm` (case-insensitive, using `.toLowerCase()` and `.includes()`).
- **Example**: `findSong("queen")` returns Queen songs.
- **Task**: Display results with `console.table`.
 

Step 7: Sort the Playlist
- **Objective**: Use `.sort()` to sort `playlist` alphabetically by `title`.
- **Task**: Display the sorted array with `console.table`.
- **Task**: Sort by `duration` (convert to seconds first).


Step 8: Fun Challenge - Random Song Picker
- **Objective**: Write a function `playRandomSong` that picks a random song using `Math.random()` and logs:  
  `"Now playing a random song: [title] by [artist]"`.

