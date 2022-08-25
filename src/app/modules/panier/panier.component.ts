import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('assets/js/userincr.js'); 
    $.getScript('assets/js/main.min.js');
    $.getScript('assets/js/script.js'); 
  }

}
