import {ajax} from '../tools/ajax';

export const getCityWeather = async city => {
    const opiopns ={
        method:"GET",
        url:'https://api.openweathermap.org/data/2.5/weather',
        params:{
            q: city,
            appid: '8f532d202af21b54367f60d1cfd715e5',
            units: 'metric',
        }
      };
    return await ajax(opiopns);
};