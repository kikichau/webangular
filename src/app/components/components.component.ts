import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { first } from 'rxjs/operators';

import { Game } from '../_models';
import { GameService } from '../_services';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    providers: [GameService],
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    data: Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;

    date: { year: number, month: number };
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    games: Game[] = [];

    constructor(private renderer: Renderer, config: NgbAccordionConfig, private gameService: GameService) {
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

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');

        this.getAllGame();
    }

    ngOnDestroy() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }

    getAllGame(){
        this.gameService.getAll().pipe(first()).subscribe(games => {
            this.games = games;
            console.log(this.games)
        });
    }
}