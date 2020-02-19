import { Component, OnInit } from '@angular/core';
import { Bank, BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

   acc_id: number;
    
    amount:number;

    result:string;

  constructor(private bankSer: BankService,
              private router: Router) { }

  ngOnInit() {
  }

  withdraw() {
    this.bankSer.withdraw(this.acc_id,this.amount)
    .subscribe(response =>{
      this.result = response;
    });
    alert("After successful transaction, click 'Cancel'");
  }

  back() {
    this.router.navigate(['trans']);
  }
  back1() {
    this.router.navigate(['main']);
  }

}

