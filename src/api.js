//My API_KEY
const API_KEY = `e2b883d7d3514669ba40b2b1b55f9220`;

//getting the date
//month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if ( month < 10) {
        return `0${month}`
    } else {
        return month;
    }
}
const getCurrentDay = () => {
    const day = new Date().getDate()
    if ( day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

getCurrentMonth()

//Base URL
const base_url = `https://api.rawg.io/api/games?key=${API_KEY}`;
const noApiBase_url = `https://api.rawg.io/api/games/`;

// popular games

const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesUrl = () => `${base_url}${popular_games}`
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`
export const newGamesUrl = () => `${base_url}${new_games}`

//game details
// export const gameDetailsUrl = (game_id) => `${base_url}/${game_id}`

export const gameDetailsUrl = (game_id) => `${noApiBase_url}${game_id}.json?&key=${API_KEY}`
export const gameScreenshotUrl = (game_id) => `${noApiBase_url}${game_id}/screenshots?&.json?&key=${API_KEY}`