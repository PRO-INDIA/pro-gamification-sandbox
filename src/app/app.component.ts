import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalService } from './Services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public modalService: ModalService) {}
  title = 'sandbox-gamification-angular';
  modelState = false;
  ngOnInit(): void {
    this.modalService.modalState.subscribe((data) => {
      this.modelState = data;
    });
  }
}
