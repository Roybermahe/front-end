import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from '../models/users.interface';

const hotUser = "http://localhost:3000/users/6RXNfwVrwK4ZGSf9PkP8"
@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private httpClient: HttpClient) { }
    
    getInformationUser(callback: Function) {
        this.httpClient.get<users>(hotUser).subscribe(Response => {
            callback(Response);
        }, error =>  callback(error));
    }
}