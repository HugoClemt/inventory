import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../interface/data';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent implements OnInit {
  data: Data[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  ImportCSV() {
    console.log('Import CSV');
  }

  ExportCSV() {
    console.log('Export CSV');
    const csvContent = this.convertArrayToCSV(this.data);
    this.downloadCSV(csvContent, 'inventory.csv');
  }

  convertArrayToCSV(data: Data[]): string {
    const csvArray = [];
    const header = Object.keys(data[0]);
    csvArray.push(header.join(','));

    data.forEach((item: Data) => {
      const row: string[] = [];
      header.forEach((field) => {
        row.push(item[field as keyof Data]);
      });
      csvArray.push(row.join(','));
    });

    return csvArray.join('\n');
  }

  downloadCSV(csvContent: string, fileName: string): void {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
