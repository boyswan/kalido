import 'index.html';
import Scene from 'objects/common/scene'
import * as Objects from 'objects'
import * as Input from 'helpers/inputs'
import { pulseValue, lowPulse } from 'helpers/intervals'
import { multiplyMouse, addMultiple } from 'helpers/utils'
import { translateHand } from 'helpers/leap'
import { kalido } from 'objects'

export const App = new Scene()
const FPS = 1000/60

const mouseMove$ = Rx.Observable.combineLatest(Input.mouseMoveX$, Input.mouseMoveY$).startWith([])
const interval$ = Rx.Observable.interval(FPS)

const streams$ = Rx.Observable.combineLatest(
  mouseMove$,
  interval$,
  (mouse, interval) => ({
    mouse: multiplyMouse(mouse, 2),
    interval: interval,
    rotate: interval / 360,
    pulseValue: pulseValue,
    lowPulse: lowPulse,
    leap: {
      translateHand
    }
  })
)

App.add(new kalido(), false)

streams$
  .delay(150)
  .do(App.update)
  .sample(FPS, Rx.Scheduler.requestAnimationFrame)
  .subscribe()
