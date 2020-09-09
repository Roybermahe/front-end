import { Component, OnInit } from '@angular/core';
import { parseTweet } from 'src/models/parseTweet.interface';
import { TweetService } from 'src/services/tweets.service';

@Component({
	selector: 'user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
	listTweet: parseTweet[] = [];
	constructor(
		private tweetService: TweetService
	) { }

	async ngOnInit() { 
		(await this.tweetService.tweetsUser()).subscribe(Response => {
			this.listTweet = Response;
		});
	}
}