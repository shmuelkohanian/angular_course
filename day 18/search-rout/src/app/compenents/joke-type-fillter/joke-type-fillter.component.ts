import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataService } from 'src/app/services/data.service';
import { first, map, switchMap } from 'rxjs/operators';
import { Joke } from 'src/app/models/joke.model';
import { combineLatest, from, Observable } from 'rxjs';

@Component({
  selector: 'app-joke-type-fillter',
  templateUrl: './joke-type-fillter.component.html',
  styleUrls: ['./joke-type-fillter.component.css']
})
export class JokeTypeFillterComponent implements OnInit {
  joke$!: Observable<Joke>;
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

    let type$ = this.route.params.pipe(map((prms) => String(prms['type'])));


      this.joke$ = keyword$.pipe(
        switchMap((key) =>
          this.index$.pipe(
            switchMap((index) =>
              type$.pipe(
                switchMap((type) =>
                  this.data.getJokeWithType(type, key, index - 1)))))));

                  let numberOfJoke$ = keyword$.pipe(
 switchMap((key) =>
 type$.pipe(
 switchMap((type) => this.data.getNumberOfTypeJokes(type,key)))));


    this.hasPrev$ = this.index$.pipe(map((index) => index > 1));
    // let numberOfJoke$ = from(this.data.getNumberOfTypeJokes());
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
    let type = String(this.route.snapshot.params['type']);
    this.router.navigate(['joke', type, keyword, index + 1]);
  }
  goPrev() {
    let index = Number(this.route.snapshot.params['index']);
    let keyword = String(this.route.snapshot.params['keyword']);
    let type = String(this.route.snapshot.params['type']);
    this.router.navigate(['joke', type, keyword, index - 1]);
  }
}
