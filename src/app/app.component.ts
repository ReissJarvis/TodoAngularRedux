import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service'
import { QueueNames } from './event-queues.constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  totalNumberOfTodos = 0

  constructor(private eventService: EventService) { }

  ngOnInit() {

    this.eventService.listen(QueueNames.NEW_TODO)
      .subscribe(() => {
        this.totalNumberOfTodos += 1
      })

    this.eventService.listen(QueueNames.CHECK_TODO)
      .subscribe(() => {
        this.totalNumberOfTodos -= 1
      })

    this.eventService.listen(QueueNames.REMOVE_TODO)
      .subscribe(value => {
        this.totalNumberOfTodos = value.payload as number
      })

    this.eventService.listen(QueueNames.UNCHECK_TODO)
      .subscribe(() => {
        this.totalNumberOfTodos += 1
      })
  }
}
