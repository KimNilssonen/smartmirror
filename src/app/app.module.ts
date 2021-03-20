import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockModule } from './clock/clock.module';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ClockModule,
		WeatherModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
