import { TestBed, inject } from '@angular/core/testing';

import { DataUserComponent } from './dataUser.component';

describe('a dataUser component', () => {
	let component: DataUserComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DataUserComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DataUserComponent], (DataUserComponent) => {
		component = DataUserComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});