import { Component, OnInit, Input } from '@angular/core';
import { parseTweet } from 'src/models/parseTweet.interface';

@Component({
	selector: 'listTweets',
	templateUrl: './listTweets.component.html',
	styleUrls: ['./listTweets.component.css']
})

export class ListTweetsComponent implements OnInit {

	@Input() tweet: parseTweet;
	constructor() { }
	ngOnInit() { }
}