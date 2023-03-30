import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private service: ServiceService) {
    this.bannerApi()
  }
  bannerApiData: any = []
  bannerApi() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerApiData = result.results;
      console.log(this.bannerApiData);
    })
  }

}
