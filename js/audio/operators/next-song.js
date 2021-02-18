import { SONGS_LIST } from "../../constants.js";
import { songIndex } from "../../script.js";
import loadSong from "./load-song.js";
import playSong from "./play-song.js";



export default function nextSong() {
    songIndex++;

    if (songIndex > SONGS_LIST.length - 1) {
        songIndex = 0;
    }

    loadSong(SONGS_LIST[songIndex]);

    playSong();
}