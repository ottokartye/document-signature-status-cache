import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { timer } from 'rxjs/internal/observable/timer';
import { map } from 'rxjs/internal/operators/map';
import { delay, publishReplay, refCount, shareReplay, switchMap, tap } from 'rxjs/operators';

export interface DocumentStatus {
  id: number;
  status: string;
}

export interface CacheListItem {
  documentId: number;
  status: Observable<DocumentStatus>;
}

const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 3000;

@Injectable()
export class ESignService {
  // Possible document statuses.
  private statuses = ['WAITING', 'SIGNED', 'REJECTED'];
  // List of document statuses.
  private documentStatusList: DocumentStatus[] = [
    { id: 1, status: 'WAITING' },
    { id: 3, status: 'SIGNED' },
    { id: 5, status: 'REJECTED' }
  ];
  private cacheList: CacheListItem[] = [];

  /**
   * Request the signature status for the
   * provided document id and add the request
   * to the list of cached items.
   */
  public getStatus(id: number): Observable<DocumentStatus> {
    if (!this.cacheList.find(item => item.documentId === id)) {
      const interval = parseInt(id + '0000');
      const cachedDocumentStatus = timer(0, interval).pipe(
        switchMap(_ => this.getDocumentStatusFromAPI(id)),
        publishReplay(1),
        refCount()
      );
      this.cacheList.push({ documentId: id, status: cachedDocumentStatus });
    }

    return this.cacheList.find(item => item.documentId === id).status;
  }

  /**
   * Get the document status for the
   * provided document id.
   */
  public getDocumentStatusFromAPI(id: number): Observable<DocumentStatus> {
    const randomStatus = this.statuses[Math.floor(Math.random() * 3)];
    return of(id).pipe(
      tap(_ => this.documentStatusList.find(s => s.id === id).status = randomStatus),
      tap(id => console.log('refreshing cache for document', id)),
      map(id => this.documentStatusList.find(document => document.id === id)),
      tap(status => console.log('new status for document', id, 'is', status.status))
    );
  }
}
