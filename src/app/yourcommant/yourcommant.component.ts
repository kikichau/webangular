import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { CommentService, AuthenticationService } from 'app/_services';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-yourcommant',
  templateUrl: './yourcommant.component.html',
  styleUrls: ['./yourcommant.component.scss']
})
export class YourcommantComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  modifynameForm: FormGroup;
  loading = false;
  submitted = false;

  currentUser: User;
  currentUserSubscription: Subscription;

  comment: Comment[] = [];

  constructor(public router: Router,
    private commentService: CommentService,
    private authenticationService: AuthenticationService) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;
      });
    }
  }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.getByGamename;
    this.deleteById;
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  getByGamename(comment: Comment) {
    this.commentService.getByGamename(game).pipe(first()).subscribe(comment => {
      this.comment = comment;
      console.log(this.comment);
    })
  }

  deleteById(commentId: number) {
    this.commentService.deleteById(commentId).pipe(first()).subscribe(comment => {
      this.comment = comment;
      console.log(this.comment);
    })
  }
}
