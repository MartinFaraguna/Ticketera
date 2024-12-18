import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpreadsheetService {
  private apiKey = 'AIzaSyAajToughkPIndPiiPsN6UE_az0XHyZH74';
  private apiUrl =
    'https://sheets.googleapis.com/v4/spreadsheets/1BcikDwGx7vnLsu0qtYJZABvZjYCRsBdupFM_qVDrGE8/values/Ticketera!A1:B2?key=' +
    this.apiKey;

  constructor(public http: HttpClient) {
    console.log('apiURL: ' + this.apiUrl);
  }

  getData() {
    return this.http.get(this.apiUrl)
  }
}
