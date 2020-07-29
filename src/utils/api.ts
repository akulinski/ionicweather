import axios from 'axios';
import {Forecast} from "../entites/Forecast";

const getCurrentWeather = (city: string) => {
    return axios.get<Forecast>(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=21bac2efd404ce0e4428367846df32b4`)
}

export default getCurrentWeather;
