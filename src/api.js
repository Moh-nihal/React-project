
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8ec38a3a59msh600e7fffe9fdd68p1493b0jsnd0ff9e01c8ca',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const GEO_API_URL="https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL="https://api.openweathermap.org/data/2.5";

// export const FORECAST_API_URL="api.openweathermap.org/data/2.5";


export const WEATHER_API_KEY="9c5fb429c5c8fe5fdc227647227f3bb0";

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`