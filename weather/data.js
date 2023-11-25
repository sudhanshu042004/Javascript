export async function fetchdata(value) {
    const api = import.meta.env.VITE_API_WEATHER_KEY;
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${api}&q=${value}`, { mode: 'cors' })
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
export async function imgfetchdata(weather) {
    const pexelApi = import.meta.env.VITE_API_PEXEL_KEY;
    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${weather}&per_page=1&page=1`, {
            method: 'GET',
            headers: {
                'Authorization': pexelApi,
                'Content-Type': 'application/json',
            },
            mode: 'cors',
        });
        const pexelData = await response.json();
        return pexelData;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
// 