import { Component } from '@angular/core';
import { SpreadsheetService } from '../services/spreadsheet.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any[] = [];

  constructor(public spreadsheet: SpreadsheetService) {}

  ngOnInit() {
    this.spreadsheet.getData().subscribe((response: any) => {
      this.data = response.values;
      console.log(this.data);
    });
  }
}
