import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartComponent } from 'highcharts-angular';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MusicCategoryComponent } from './music-category/music-category.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { TileComponent } from './tile/tile.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    SearchProductComponent,
    HighchartsChartComponent,
    FooterComponent,
    MusicCategoryComponent,
    MusicPlayerComponent,
    TileComponent,
    PaginatorComponent,
    // Ng2SearchPipeModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
