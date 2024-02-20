import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saisie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saisie.component.html',
  styleUrl: './saisie.component.scss'
})
export class SaisieComponent {

  @ViewChild('saisieInput', { static: true }) saisieInput!: ElementRef<HTMLInputElement>;
  calculate: string = "";
  selectedUnity: string = 'unity1';

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

}
