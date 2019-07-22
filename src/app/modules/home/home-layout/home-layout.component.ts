import { Component, OnInit } from '@angular/core';
import mockData from '../../../../assets/mockData'; //TODO figure out how to do absolute paths

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  currentOrgs: any;

  constructor() { }

  ngOnInit() {
    this.currentOrgs = mockData.orderedOrganizations.slice(0, 3);
  }

}
