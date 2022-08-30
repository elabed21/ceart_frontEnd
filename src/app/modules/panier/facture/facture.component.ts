import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  totalAmmount: any;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {

    this.totalAmmount = this.router.getCurrentNavigation()?.extras.state?.totalAmmount;
    if (!this.totalAmmount) {
      this.totalAmmount = JSON.parse(<string>localStorage.getItem('totalAmmount'));
    }

  }
}
