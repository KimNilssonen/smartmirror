import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
	selector: 'clock',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.less']
})
export class ClockComponent implements OnInit, OnDestroy {
	hours: string;
	minutes: string;
	seconds: string;
	private timer = null;

	ngOnInit() {
		this.setCurrentTime();
		this.timer = this.updateTime();
	}

	setCurrentTime() {
		const currentTime = new Date(Date.now());
		this.hours = this.toString(currentTime.getHours());
		this.minutes = this.toString(currentTime.getMinutes());
		this.seconds = this.toString(currentTime.getSeconds());
	}

	updateTime() {
		setInterval(() => {
			this.setCurrentTime();
		}, 1000);
	}

	private toString(value: number) {
		return value < 10 ? `0${value}` : value.toString();
	}

	ngOnDestroy() {
		clearInterval(this.timer);
	}
}
