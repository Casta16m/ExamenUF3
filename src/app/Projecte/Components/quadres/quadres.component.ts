import { Component } from '@angular/core';
import { MuseumApiService } from '../../Serveis/API/museum-api.service';

@Component({
  selector: 'app-quadres',
  templateUrl: './quadres.component.html',
  styleUrls: ['./quadres.component.css']
})
export class QuadresComponent {

  quadresList!: Array<any>;

  constructor(private museumApiService: MuseumApiService) { }

  ngOnInit(): void {
    this.loadQuadres();
  }

  public loadQuadres() {
    this.museumApiService.getQuadres().subscribe(data => {
      this.quadresList = data;
      console.log(this.quadresList);
    })
  }

  public paginate() {
    this.museumApiService.getPagination().subscribe(data => {

    });
  }

}
