import {ajax} from '../tools/ajax';

export const getCountries = async () => {
    const opiopns ={
        method:"GET",
        url:"https://restcountries.com/v3.1/all"
      };
    return await ajax(opiopns);
};
