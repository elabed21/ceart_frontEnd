import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    $.getScript('assets/js/strip.pkgd.min.js'); 
    $.getScript('assets/js/main.min.js');
    $.getScript('assets/js/script.js'); 
   

  }

}
