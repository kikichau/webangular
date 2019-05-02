import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

import { Game } from '../_models/game';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GameService {
    constructor(private http: HttpClient) { }

    create(game: Game) {
        return this.http.post(`http://localhost:3000/games/`, game);
    }

    updateById(game: Game) {
        return this.http.put(`http://localhost:3000/games//${game.gameId}`, game)
    }

    deleteById(game: Game) {
        return this.http.delete('http://localhost:3000/games/' + game);
    }

    getAll() {
        return this.http.get<Game[]>('http://localhost:3000/games');
    }

    getByUsername(game: Game) {
        return this.http.get(`http://localhost:3000/games/${game.username}`);
    }

    getById(gameId: number) {
        return this.http.get(`http://localhost:3000/games/${gameId}`);
    }
}