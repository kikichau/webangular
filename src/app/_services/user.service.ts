import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    create(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    updateById(user: User) {
        return this.http.put(`${config.apiUrl}/users/` + name.userId, user)
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/users/` + id);
    }

    
    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${config.apiUrl}/users/` + user.id, user);
    }

}