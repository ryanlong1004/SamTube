import { DAYS, MONTHS } from './config';

export function getDate() {
    const now = new Date();
    let dd = String(now.getDate()).padStart(2, '0');
    let mm = MONTHS[now.getMonth()];
    let yyyy = now.getFullYear();

    return `${DAYS[now.getDay()]} ${mm} ${dd}, ${yyyy}`;
}

export function getTime() {
    const now = new Date();

    let period = now.getHours() > 11 ? 'PM' : 'AM';
    let hour = String(now.getHours() > 12 ? now.getHours() - 12 : now.getHours()).padStart(2, '0');
    let minute = String(now.getMinutes()).padStart(2, '0');
    let second = String(now.getSeconds()).padStart(2, '0');

    return `${hour > 12 ? hour - 12 : hour}:${minute}:${second} ${period}`
}

export async function getWeather() {
    const res = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=41.31&lon=-75.32&appid=b70600f4495d4665c49354e8081d5424',
        {
            method: 'GET'
        }
    );

    const json = await res.json();
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
    return JSON.stringify(json);
}