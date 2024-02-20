import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-saisie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.scss']
})
export class SaisieComponent {

  @ViewChild('saisieInput', { static: true }) saisieInput!: ElementRef<HTMLInputElement>;

  title: string;
  calculate: string;
  selectedUnity: string;

  constructor(private dataService: DataService) {
    this.title = '';
    this.calculate = '';
    this.selectedUnity = 'unity1';
  }

  appendToSaisie(value: string) {
    const currentInputValue = this.saisieInput.nativeElement.value;
    this.saisieInput.nativeElement.value = currentInputValue + value;
  }

  clearSaisie() {
    this.saisieInput.nativeElement.value = '';
    this.calculate = '';
  }

  calculateResult() {
    const expression = this.saisieInput.nativeElement.value;
    try {
      this.calculate = eval(expression);
    } catch (error) {
      this.calculate = 'Error';
    }
  }

  ValidateSaisie() {
    const newData = { title: this.title, calculate: this.calculate, selectedUnity: this.selectedUnity };
    this.dataService.addData(newData);
    this.clearSaisie();
    console.log('ValidateSaisie');
    console.log('Titre:', this.title);
    console.log('Résultat:', this.calculate);
    console.log('Unité:', this.selectedUnity);
  }

  sendData() {
    const newData = { title: this.title, calculate: this.calculate, selectedUnity: this.selectedUnity };
    this.dataService.addData(newData);
    this.clearSaisie();
  }

}
