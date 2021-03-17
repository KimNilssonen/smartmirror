import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockModule } from './clock/clock.module';
import { WeatherModule } from './weather/weather.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		ClockModule,
		WeatherModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
