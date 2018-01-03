import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'

export interface Event {
  queue: string
  payload: string | number | any
}

@Injectable()
export class EventService {

  eventQueue: Subject<Event> =  new Subject<Event>()

  constructor() { }

  listen(queueName:string): Observable<Event> {
    return this.eventQueue.filter(event => event.queue === queueName)
  }

  emit(queue, payload?) {
    this.eventQueue.next({queue, payload})
  }

}
