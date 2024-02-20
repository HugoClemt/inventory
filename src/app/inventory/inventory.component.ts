import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../interface/data';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit{

  data: Data[] = [];

  constructor(private dataService: DataService) {}


  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }

}
