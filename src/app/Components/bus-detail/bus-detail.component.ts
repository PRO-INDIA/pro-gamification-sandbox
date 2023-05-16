import { Component, Input, OnInit } from '@angular/core';
import { Gamification } from '@stagetheproindia/pro-gamification';
import { environment } from '../../../environments/environment';
import { ModalService } from '../../Services/modal.service';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css'],
})
export class BusDetailComponent implements OnInit {
  constructor(
    public gamification: Gamification,
    public modalService: ModalService
  ) {}
  @Input() busDetails: any;
  containerName = environment.containerName;
  blobEndPoint = environment.blobEndpoint;
  togglePaymet: boolean = false;

  sasToken: string =
    '?sv=2021-10-04&si=sandbox-assets-18674F72D96&sr=c&sig=rKjuSXkKkvZGBsbvSQEBAPdiHxKqfQ7U2s1I8Na%2FaE8%3D';

  busFacility: string = `${this.blobEndPoint}/${this.containerName}/bus-facility.png`;

  seats: string = `${this.blobEndPoint}/${this.containerName}/seats.png`;

  ngOnInit(): void {}

  bookTicket() {
    this.gamification.updateGameAction(
      environment.gamification.userId,
      environment.gamification.gameId,
      '',
      ''
    );
    this.modalService.modalStateData.next({
      headerText: 'Booked Successfully',
      pointsText: 'Points',
      points: '20',
    });
    this.modalService.openModal();
  }
  togglePayment() {
    this.togglePaymet = !this.togglePaymet;
  }
}
