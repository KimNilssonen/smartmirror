import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APIKeys } from "src/config";

@Injectable()
export class WeatherService {
	constructor(private httpClient: HttpClient) { }

	getLocation() {
		return 'Kalmar';
	}

	getApiKey() {
		return APIKeys.weather;
	}

	getCurrentWeather() {
		// return this.httpClient.get(`api.openweathermap.org/data/2.5/weather?q=${this.getLocation()}&appid=${this.getApiKey()}&units=metric`);
		return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=Kalmar&appid=' + this.getApiKey() + '&units=metric').toPromise();
	}
}
