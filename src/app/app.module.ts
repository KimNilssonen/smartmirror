import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockModule } from './clock/clock.module';
import { WeatherModule } from './weather/weather.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		HttpClientModule,
		ClockModule,
		WeatherModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
