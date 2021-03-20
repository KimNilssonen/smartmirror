import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

@NgModule({
	declarations: [
		WeatherComponent
	],
	exports: [
		WeatherComponent
	],
	providers: [WeatherService]
})
export class WeatherModule { }
