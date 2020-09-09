import { TestBed, inject } from '@angular/core/testing';

import { FormTweetComponent } from './formTweet.component';

describe('a formTweet component', () => {
	let component: FormTweetComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FormTweetComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FormTweetComponent], (FormTweetComponent) => {
		component = FormTweetComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});