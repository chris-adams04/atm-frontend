import { Component, OnInit } from '@angular/core';
import { Bank, BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

   acc_id: number;
    
    amount:number;

    result: string;

  constructor(private bankSer: BankService,
              private router: Router) { }

  ngOnInit() {
  }



  deposit() {
    this.bankSer.deposit(this.acc_id,this.amount)
    .subscribe(response =>{
      this.result = response;
    });
  }

  back() {
    this.router.navigate(['trans']);
  }

  back1() {
    this.router.navigate(['main']);
  }
}
