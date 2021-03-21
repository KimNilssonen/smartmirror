import { Component, OnDestroy, OnInit } from "@angular/core";
import { Weather } from "./weather";
import { WeatherService } from "./weather.service";

@Component({
	selector: 'weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit, OnDestroy {
	ready: boolean = false;
	weather: Weather;

	private timer = null;

	constructor(private weatherService: WeatherService) { }

	async ngOnInit() {
		await this.fetchAndMapWeather();
		this.ready = true;
		this.timer = this.updateWeather();
	}

	mapValues(data: any) {
		this.weather = new Weather({
			description: data.weather[0].description,
			temp: data.main.temp,
			feels_like: data.main.feels_like,
			temp_max: data.main.temp_max,
			temp_min: data.main.temp_min,
			preassure: data.main.pressure,
			humidity: data.main.humidity,
			wind: data.wind.speed,
			sunrise: data.sys.sunrise,
			sunset: data.sys.sunset
		});
	}

	async updateWeather() {
		setInterval(() => {
			this.fetchAndMapWeather();
		}, 60000);
	}

	async fetchAndMapWeather() {
		const data = await this.weatherService.getCurrentWeather();
		this.mapValues(data);
	}

	ngOnDestroy() {
		clearInterval(this.timer);
	}
}