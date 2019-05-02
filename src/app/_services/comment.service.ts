import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

import { Comment } from '../_models/comment';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CommentService {
    constructor(private http: HttpClient) { }

    create(comment: Comment) {
        return this.http.post(`http://localhost:3000/comments/`, comment);
    }

    updateById(comment: Comment) {
        return this.http.put(`http://localhost:3000/comments//${comment.commentId}`, comment)
    }

    deleteById(comment: Comment) {
        return this.http.delete('http://localhost:3000/comments/' + comment);
    }

    getAll() {
        return this.http.get<Comment[]>(`http://localhost:3000/comments/`);
    }

    getByUsername(comment: Comment) {
        return this.http.get(`http://localhost:3000/comments/${comment.username}`);
    }

    getByGamename(comment: Comment) {
        return this.http.get(`http://localhost:3000/comments/${comment.gamename}`);
    }

    getById(commentId: number) {
        return this.http.get(`http://localhost:3000/comments/${commentId}`);
    }
}