import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() header: string;
  @Input() description: string;
  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  public confirm() {
    this.isConfirmed.emit(true);
  }

  public close() {
    this.isConfirmed.emit(false);
  }

}



