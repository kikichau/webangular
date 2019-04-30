import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

import { Game  } from '../_models/game';

@Injectable()
export class GameService {
    constructor(private http: HttpClient) { }

    create(game: Game) {
        return this.http.post(`http://localhost:4200/games/`, game);
    }

    updateById(game: Game) {
        return this.http.put(`http://localhost:4200/games/` + game.gameId, game)
    }

    deleteById(game : Game) {
        return this.http.delete('http://localhost:4200/games/' + game);
    }

    getAll() {
        return this.http.get<Game[]>('http://localhost:4200/games/')
    }

    getById(id: number) {
        return this.http.get(`http://localhost:4200/games/` + id);
    }
}