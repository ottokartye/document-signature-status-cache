import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentStatus, ESignService } from '../e-sign.service';
import { DocumentItem } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() set data(value: DocumentItem[]) {
    this._data = value;
    if (this._data && this._data.length) {
      // Build a list with the documents that should have signature.
      const documentsWithSignature = this._data.filter(document => !!document.shouldHaveSignature);
      documentsWithSignature.forEach(document => document.signatureStatus = this.getDocumentStatus(document.id));
    }
  }
  public _data: DocumentItem[];

  constructor(private eSignService: ESignService) { }

  /**
   * Get the document status for the
   * provided document id.
   */
  private getDocumentStatus(id: number): Observable<DocumentStatus> {
    console.log('trying to get signature status for document', id);
    return this.eSignService.getStatus(id);
  }

}
