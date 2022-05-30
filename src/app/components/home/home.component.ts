import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: .5 }),
        animate(2000, style({opacity: 1}))
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  dataPorfolio:any;

  //inyecto el servicio getData del PortfolioService
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    //Me suscribo al observable que devuelve un json
    this.datosPortfolio.getData().subscribe(datos=>{
        console.log("HomeComponent datos: "+datos);
        //guardo en la variable los datos que recupere anteiormente
        this.dataPorfolio=datos;//ver como se formo el array. podria ser datos[x]
      });

  }

}
