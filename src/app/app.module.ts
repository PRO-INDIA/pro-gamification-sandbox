import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookTicketComponent } from './Components/book-ticket/book-ticket.component';
import { OfferComponent } from './Components/offer/offer.component';
import { BusDetailComponent } from './Components/bus-detail/bus-detail.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TripsComponent } from './Components/trips/trips.component';
import { RatingComponent } from './Pages/rating/rating.component';
import { StarRatingModule } from 'angular-star-rating';
import { StarRatingComponent } from './Components/star-rating/star-rating.component';
import { ModalComponent } from './Components/modal/modal.component';
import { environment } from '../environments/environment';
import { ProGamificationModule } from '@stagetheproindia/pro-gamification';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ConfirmDialogComponent,
    BookTicketComponent,
    OfferComponent,
    BusDetailComponent,
    FooterComponent,
    TripsComponent,
    RatingComponent,
    StarRatingComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProGamificationModule.forRoot({
      gamificationApiUrl: `${environment.baseUrl}/tokens/sandbox/${environment.clientId}/${environment.clientSecret}`,
    }),
    StarRatingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
