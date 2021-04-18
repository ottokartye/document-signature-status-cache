import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/operators';
import { DocumentStatus } from '../e-sign.service';

export interface DocumentItem {
  id: number;
  name: string;
  shouldHaveSignature: boolean;
  signatureStatus: Observable<DocumentStatus>;
}

@Injectable()
export class ListService {
  private list = [
    { id: 1, name: 'Identity card', shouldHaveSignature: true, signatureStatus: null },
    { id: 2, name: 'Passport', shouldHaveSignature: false, signatureStatus: null },
    { id: 3, name: 'Birth certificate', shouldHaveSignature: true, signatureStatus: null },
    { id: 4, name: 'Bank account statement', shouldHaveSignature: false, signatureStatus: null },
    { id: 5, name: '2nd identity card', shouldHaveSignature: true, signatureStatus: null }
  ];

  /**
   * Get a list of documents.
   */
  public getDocuments(): Observable<DocumentItem[]> {
    return of(this.list);
  }
}
