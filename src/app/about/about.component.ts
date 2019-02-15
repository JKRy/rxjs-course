import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Observable,
  noop,
  interval,
  timer,
  fromEvent,
  of,
  concat,
  merge
} from 'rxjs';
import { createHttpObservable } from '../common/util';
import { map } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const interval$ = interval(1000);
    // const interval$ = timer(3000, 1000);

    // const sub = interval$.subscribe(val => console.log('stream 1 ' + val));

    // setTimeout(() => sub.unsubscribe(), 5000);

    // // is only the definition of the stream
    // const click$ = fromEvent(document, 'click');

    // // is now an observable once subscribed to
    // click$.subscribe(
    //   evt => console.log(evt),
    //   err => console.log(err),
    //   () => console.log('completed')
    // );

    // const source1$ = of(1, 2, 3);
    // const source2$ = of(4, 5, 6);

    // // sequential concat - source2$ only emits once source1$ completes
    // const result$ = concat(source1$, source2$);

    // result$.subscribe(console.log);

    // const interval1$ = interval(1000);

    // const interval2$ = interval1$.pipe(map(val => 10 * val));

    // const result$ = merge(interval1$, interval2$);

    // result$.subscribe(console.log);

    // To show cancellation of requests
    // const http$ = createHttpObservable('/api/courses');

    // const sub = http$.subscribe(console.log);

    // setTimeout(() => sub.unsubscribe(), 0);


  }
}
