import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-parent',
  imports: [HeaderComponent, FooterComponent, TableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  tableData: any[] = [];

  onCountryChange(country: string) {

    this.tableData = this.filterDataByCountry(country);
  }

  filterDataByCountry(country: string): any[] {

    return [
      { name: 'Ahmed', country },
      { name: 'Sarah', country },
    ];
  }
}
