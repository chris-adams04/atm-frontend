import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.css']
})
export class TransComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['main']);
  }
}
