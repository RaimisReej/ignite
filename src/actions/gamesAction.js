import axios from "axios";
import { popularGamesUrl,upcomingGamesUrl,newGamesUrl } from "../api";

//action creator

export const loadGames = () => async (dispatch) => {
    //fetch axios
    const popularData = await axios.get(popularGamesUrl())
    const newGamesData = await axios.get(newGamesUrl())
    const upcomingData = await axios.get(upcomingGamesUrl())
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
}