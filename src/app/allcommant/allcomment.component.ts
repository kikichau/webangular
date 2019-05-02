import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { first } from 'rxjs/operators';

import { Comment, Game } from '../_models';
import { CommentService, GameService } from '../_services';

@Component({
  selector: 'app-allcomment',
  templateUrl: './allcomment.component.html',
  styleUrls: ['./allcomment.component.scss']
})
export class AllcommentComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;

  date: { year: number, month: number };
  model: NgbDateStruct;

  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;

  state_icon_primary = true;

  comments: Comment[] = [];
  games: Game[] = [];

  constructor(private renderer: Renderer, config: NgbAccordionConfig, private commentService: CommentService, private gameService: GameService) {
    config.closeOthers = true;
    config.type = 'info';
  }

  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.getAllComment;
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  getGameName(gameId: number) {
    this.gameService.getById(gameId).pipe(first()).subscribe(() => {
      this.getAllGame()
    });
  }

  private getAllGame() {
    this.gameService.getAll().pipe(first()).subscribe(games => {
      this.games = games;
    });
  }

  getGameComment(comment: Comment) {
    this.commentService.getByGamename(comment.username).pipe(first()).subscribe(() => {
      this.getAllComment()
    });
  }

  private getAllComment() {
    this.commentService.getAll().pipe(first()).subscribe(comments => {
      this.comments = comments;
      console.log(this.comments)
    });
  }
}