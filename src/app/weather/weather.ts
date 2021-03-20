export class WeatherReponse {
	weather: Weather;
	temperature: Temperature;

	constructor(weatherReponse: Partial<WeatherReponse>) {
		Object.assign(this, weatherReponse);
	}
}

export class Weather {
	id: string;
	main: string;
	description: string;
	icon: string;

	constructor(weather: Partial<Weather>) {
		Object.assign(this, weather);
	}
}

export class Temperature {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	preassure: number;
	humidity: number;

	constructor(temperature: Partial<Temperature>) {
		Object.assign(this, temperature);
	}
}
