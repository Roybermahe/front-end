import { Component, OnInit } from '@angular/core';
import { users } from 'src/models/users.interface';
import { UserService } from 'src/services/user.service';
import { TweetService } from 'src/services/tweets.service';

@Component({
	selector: 'dataUser',
	templateUrl: './dataUser.component.html',
	styleUrls: ['./dataUser.component.css']
})

export class DataUserComponent implements OnInit {

	user: users;
	constructor(
		private userService: UserService
	) { }

	async ngOnInit() {
		this.userService.getInformationUser(Response => {
			this.user = Response;
		});
		
	 }
}