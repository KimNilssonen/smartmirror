export class WeatherObject {
	weather: Weather;
	temperature: Temperature;

	constructor(weatherReponse: Partial<WeatherObject>) {
		Object.assign(this, weatherReponse);
	}
}

export class Weather {
	id: string;
	description: string;
	icon: string;
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	preassure: number;
	humidity: number;
	wind: number;
	sunrise: Date;
	sunset: Date;

	constructor(weather: Partial<Weather>) {
		Object.assign(this, weather);
	}
}
