import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    create(user: User) {
        return this.http.post(`${config.baseUrl}/users/register`, user);
    }

    updateById(user: User) {
        return this.http.put(`${config.baseUrl}/users/` + user.id, user)
    }

    getById(id: number) {
        return this.http.get(`${config.baseUrl}/users/` + id);
    }
}