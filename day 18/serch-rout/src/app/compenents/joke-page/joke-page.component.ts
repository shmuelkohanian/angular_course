import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataService } from 'src/app/services/data.service';
import { first, map, switchMap } from 'rxjs/operators';
import { Joke } from 'src/app/models/joke.model';
import { combineLatest, from, Observable } from 'rxjs';

@Component({
  selector: 'app-joke-page',
  templateUrl: './joke-page.component.html',
  styleUrls: ['./joke-page.component.css'],
})
export class JokePageComponent implements OnInit {
  joke$!: Observable<Joke[]>;
  index$!: Observable<number>;
  hasNext$!: Observable<boolean>;
  hasPrev$!: Observable<boolean>;
  hasType$!: Observable<boolean>;

  constructor(
    private data: dataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.index$ = this.route.params.pipe(
      map((prms) => Number(prms['index']) + 1)
    );

    let keyword$ = this.route.params.pipe(
      map((prms) => String(prms['keyword']))
    );


      this.joke$ = keyword$.pipe(
        switchMap((key) =>
          this.index$.pipe(
            switchMap((index) => this.data.getJoke(key, index - 1)))));



    this.hasPrev$ = this.index$.pipe(map((index) => index > 1));
    let numberOfJoke$ = from(this.data.getNumberOfJokes(keyword$));
    this.hasNext$ = combineLatest([this.index$, numberOfJoke$]).pipe(
      map((M) => M[0] < M[1])
    );
  }

  goToSearch() {
    this.router.navigate(['search']);
  }
  goNext() {
    let index = Number(this.route.snapshot.params['index']);
    let keyword = String(this.route.snapshot.params['keyword']);
    this.router.navigate(['joke', keyword, index + 1]);
  }
  goPrev() {
    let index = Number(this.route.snapshot.params['index']);
    let keyword = String(this.route.snapshot.params['keyword']);
    this.router.navigate(['joke', keyword, index - 1]);
  }
}
