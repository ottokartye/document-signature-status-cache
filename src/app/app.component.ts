import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListService } from './list/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'e-sign';

  constructor(private listService: ListService) { }

  public getList(): Observable<any[]> {
    return this.listService.getDocuments();
  }
}
