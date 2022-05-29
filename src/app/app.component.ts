import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	title = 'Angular-learn-js-180422';
	property = 'property';

	shopIcon = 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-shop-icon-png-image_3762863.jpg';

	log(event: Event) {
		event.stopPropagation();
		console.log(event);
	}
}
