import { SONGS_LIST } from "../../constants.js";
import { songIndex } from "../../script.js";
import loadSong from "./load-song.js";
import playSong from "./play-song.js";


export default function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = SONGS_LIST.length - 1;
    }

    loadSong(SONGS_LIST[songIndex]);

    playSong();
}
