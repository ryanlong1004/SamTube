import { DAYS, MONTHS } from './config';

export function getDate() {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = MONTHS[today.getMonth()];
    var yyyy = today.getFullYear();

    return `${DAYS[today.getDay()]} ${mm} ${dd}, ${yyyy}`;
}

export async function getWeather() {
    const res = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=41.31&lon=-75.32&appid=b70600f4495d4665c49354e8081d5424',
        {
            method: 'GET'
        }
    );

    const json = await res.json();
    console.log(JSON.stringify(json))
    return JSON.stringify(json);
}

export async function getVideoDetails(video_id) {
    const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_id}&key=AIzaSyCVOiu_t3Mt5od2IYHQVuWPZIr_B8akA5s`,
        {
            method: 'GET'
        }
    );

    const json = await res.json();
    console.log(JSON.stringify(json))
    return JSON.stringify(json);
}