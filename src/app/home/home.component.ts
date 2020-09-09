import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../services/tweets.service'
import { parseTweet } from 'src/models/parseTweet.interface';
@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	listTweet: parseTweet[] = [];
	constructor(
		private tweetService: TweetService 
	) { }

	async ngOnInit() {
		this.tweetService.communicationEmitter.subscribe(Response => {
			this.loadTweets();
		})
		await this.loadTweets();
	}

	async loadTweets() {
		(await this.tweetService.listTweet()).subscribe(Response => {
			this.listTweet = Response;
		});
	}
}