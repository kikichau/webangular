import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    create(user: User) {
        return this.http.post(`http://localhost:3000/users/register/${user.userId}`, user);
    }

    updateById(user: User) {
        return this.http.put(`http://localhost:3000/users/${user.userId}`, user)
    }

    getById(userId: number) {
        return this.http.get(`http://localhost:3000/users/${userId}`);
    }
}