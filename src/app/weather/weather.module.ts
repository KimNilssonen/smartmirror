import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';

@NgModule({
	declarations: [
		WeatherComponent
	],
	exports: [
		WeatherComponent
	]
})
export class WeatherModule { }
