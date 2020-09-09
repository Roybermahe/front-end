import { TestBed, inject } from '@angular/core/testing';

import { ListTweetsComponent } from './listTweets.component';

describe('a listTweets component', () => {
	let component: ListTweetsComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ListTweetsComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ListTweetsComponent], (ListTweetsComponent) => {
		component = ListTweetsComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});