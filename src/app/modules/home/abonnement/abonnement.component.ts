import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css']
})
export class AbonnementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('assets/js/strip.pkgd.min.js'); 
    $.getScript('assets/js/main.min.js');
    $.getScript('assets/js/script.js'); 
    

  }

}
