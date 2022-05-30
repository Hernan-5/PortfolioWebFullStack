import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  zoom = 14

  options: google.maps.MapOptions = {
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    center: new google.maps.LatLng(-34.6654604,-58.7274992),
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 14,
    minZoom: 11,
  }

  constructor() { }

  /* ngOnInit(): void {
  } */
  ngOnInit() {

  }

}
