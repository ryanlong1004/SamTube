// Importing DAYS and MONTHS from config file
import { DAYS, MONTHS } from './config';

// Function to get current date
export function getDate() {
    const now = new Date();
    let dd = String(now.getDate()).padStart(2, '0'); // Day of the month
    let mm = MONTHS[now.getMonth()]; // Month
    let yyyy = now.getFullYear(); // Year

    return `${DAYS[now.getDay()]} ${mm} ${dd}, ${yyyy}`; // Return formatted date
}

// Function to get current time
export function getTime() {
    const now = new Date();

    let period = now.getHours() > 11 ? 'PM' : 'AM'; // AM or PM
    let hour = String(now.getHours() > 12 ? now.getHours() - 12 : now.getHours()).padStart(2, '0'); // Hour
    let minute = String(now.getMinutes()).padStart(2, '0'); // Minute
    let second = String(now.getSeconds()).padStart(2, '0'); // Second

    return `${hour > 12 ? hour - 12 : hour}:${minute}:${second} ${period}`; // Return formatted time
}

// Function to fetch weather data asynchronously
export async function getWeather() {
    const res = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=41.31&lon=-75.32&appid=b70600f4495d4665c49354e8081d5424',
        {
            method: 'GET'
        }
    );

    const json = await res.json();
    return JSON.stringify(json); // Return weather data as a JSON string
}

// Function to fetch video details asynchronously by video ID
export async function getVideoDetails(video_id) {
    const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${video_id}&key=AIzaSyCVOiu_t3Mt5od2IYHQVuWPZIr_B8akA5s`,
        {
            method: 'GET'
        }
    );

    const json = await res.json();
    return JSON.stringify(json); // Return video details as a JSON string
}
