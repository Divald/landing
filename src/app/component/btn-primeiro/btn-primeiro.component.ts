import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = 'primary' | 'secundary';

@Component({
  selector: 'btn-primeiro',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './btn-primeiro.component.html',
  styleUrls: ['./btn-primeiro.component.css'],
})
export class BtnPrimeiroComponent {
  @Input('btn-text') btnText: string = ' ssss';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = 'primary';

  @Output('submit') onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
