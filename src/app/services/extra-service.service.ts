import {Injectable} from '@angular/core';
import {ApiHelperService} from './api.helper.service';
import {ObjectService} from './object.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


/*
 * Generic service
 */
@Injectable()
export class ExtraServiceService {

  constructor(
    private httpClient: HttpClient,
    private apiHelperService: ApiHelperService,
    private objectService: ObjectService,
  ) {
  }

  downloadFile(row: any, folder: any): any {
    const fileName = encodeURIComponent(row.fileName);
    const URL = environment.apiUrl + folder + fileName;
    this.downloadBlobFile(fileName, URL);
  }
  downloadBlobFileFF(fileName: string, URL: any, docType: any): any {
    const headers = new HttpHeaders();
    this.httpClient.get(URL, {headers, responseType: 'blob'}).subscribe(
      (response: any) => {
        const dataType = response.type;
        const binaryData = [];
        binaryData.push(response);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
        if (fileName) {
          downloadLink.setAttribute('download', fileName + '.' + docType);
          document.body.appendChild(downloadLink);
          downloadLink.click();
        }
      }
    );
  }
  downloadBlobFile(fileName: string, URL: any): any {
    const headers = new HttpHeaders();
    this.httpClient.get(URL, {headers, responseType: 'blob'}).subscribe(
      (response: any) => {
        const dataType = response.type;
        const binaryData = [];
        binaryData.push(response);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
        if (fileName) {
          downloadLink.setAttribute('download', fileName );
          document.body.appendChild(downloadLink);
          downloadLink.click();
        }
      }
    );
  }
}
