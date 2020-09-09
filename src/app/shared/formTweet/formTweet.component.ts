import { Component, OnInit } from '@angular/core';
import { tweet } from 'src/models/tweet.interface';
import { TweetService } from 'src/services/tweets.service';
import { UserService } from "src/services/user.service";

@Component({
	selector: 'formTweet',
	templateUrl: './formTweet.component.html',
	styleUrls: ['./formTweet.component.css']
})

export class FormTweetComponent implements OnInit {

	text: string = '';
	tweet: tweet;
	constructor(
		private tweetService: TweetService,
		private userService: UserService
	) { }

	ngOnInit() {
		
	}

	async onSubmit() {
		this.tweet = {date: new Date(), text: this.text, userId: "6RXNfwVrwK4ZGSf9PkP8" };
		this.userService.getInformationUser(async Response => {
			this.tweet.user =  Response;
			
			(await this.tweetService.saveTweet(this.tweet))
			.subscribe(() => {
				this.tweetService.communicationEmitter.emit(true);
			});
		});
	}
}