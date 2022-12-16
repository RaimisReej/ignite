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

// popular games

const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

 const popularGamesUrl = () => `${base_url}${popular_games}`

console.log(popularGamesUrl())