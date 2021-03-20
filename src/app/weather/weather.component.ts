import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherReponse } from "./weather";
import { WeatherService } from "./weather.service";

@Component({
	selector: 'weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.less']
})
export class WeatherComponent implements OnInit {
	weatherReponse: WeatherReponse;

	constructor(private weatherService: WeatherService) { }

	async ngOnInit() {
		this.weatherService.getCurrentWeather()
			.subscribe(data => {
				console.log(JSON.stringify(data));
			});
		// this.mapValues(response);
	}

	mapValues(response: any) {
		this.weatherReponse = new WeatherReponse(response);
		console.log('weatherResponse:', this.weatherReponse)
	}

	async getTemperature() {

	}
}