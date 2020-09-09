import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { parseTweet } from '../models/parseTweet.interface';
import { tweet } from 'src/models/tweet.interface';

const hotTweets = "http://localhost:3000/tweets";
const codeUser = "6RXNfwVrwK4ZGSf9PkP8";
@Injectable({
    providedIn: 'root'
})

export class TweetService {
    
    communicationEmitter = new EventEmitter<Boolean>();
    constructor(private httpClient: HttpClient) { }

    async saveTweet(tweet:tweet) {
        return this.httpClient.post(hotTweets, tweet)
    }

    async listTweet() {
        return this.httpClient.get<parseTweet[]>(hotTweets);
    }
 
    async tweetsUser() {
        return this.httpClient.get<parseTweet[]>(`${hotTweets}/user/${codeUser}`)
    }

}