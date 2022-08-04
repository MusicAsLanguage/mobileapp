import SongContext from "./songcontext";
import { useContext } from "react";
import { getSongPlayingStatus, updateSongPlayingStatus } from "../../api/status";

export default useSong = () => {
    const { songStatus, setSongStatus } = useContext(SongContext);

    //
    // Purpose: Retrieve the specified song repeat count for a given song
    // Return: a number
    //
    const getSongRepeats = (songName) => {
        try {
            let repeats = 0;

            if (songStatus == undefined) return;

            const song = songStatus.filter(
                (item) => item.SongName == songName
            );

            repeats = song[0]?.Repeats == null ? 0: song[0].Repeats;
            return repeats;
        } catch (error) {
            console.log(error);
        }
    };

    //
    // Purpose: fetch all song progress data from server (HTTPS GET)
    // Return: response object from server endpoint
    //
    const fetchStatusData = async () => {
        const response = await getSongPlayingStatus();

        if (response === null) {
            return null;
        } else {
            setSongStatus(response.data);
            return response;
        }
    };

    // 
    // Purpose: Post song progress data to server (HTTPS POST)
    // Return: response object from server endpoint
    //
    const updateStatusData = async (data) => {
        const response = await updateSongPlayingStatus(data);

        if (response === null) {
            return null;
        } else {
            return response;
        }
    };

    return {
        songStatus,
        fetchStatusData,
        updateStatusData,
        getSongRepeats,
    };
};
