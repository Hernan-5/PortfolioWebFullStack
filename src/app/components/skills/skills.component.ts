import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  function crearCirculo(porcentaje:any, color:any, tamano:any, trazo:any) {
    let svg = `<svg class="grafico-circular" viewbox="0 0 36 36" width="${tamano}" height="${tamano}" xmlns="http://www.w3.org/2000/svg">
        <path class="circulo-bg" stroke="#eeeeee" stroke-width="${trazo * 0.5}" fill="none"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
        <path class="circulo" stroke="${color}" stroke-width="${trazo}" stroke-dasharray="${porcentaje},100" stroke-linecap="round" fill="none"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <text class="porcentaje" x="50%" y="50%" alignment-baseline="central" text-anchor="middle" font-size="8">${porcentaje}%</text>
    </svg>`
    return svg;
  }

  let eDiv = document.getElementsByClassName('barraCircular');

  //for(let div of eDiv.length) {
  for(var i = 0; i < eDiv.length; i++) {
    let grafico = eDiv[i] as HTMLElement;
    let porcentaje = grafico.dataset['porcentaje'];
    let color = ('color' in grafico.dataset) ? grafico.dataset['color'] : "#2F4F4F";
    let tamano = ('tamano' in grafico.dataset) ? grafico.dataset['tamano'] : "100";
    let trazo = ('trazo' in grafico.dataset) ? grafico.dataset['trazo'] : "1";
    eDiv[i].innerHTML = crearCirculo(porcentaje, color, tamano, trazo);
  }
}

}
