import { Component, OnInit } from '@angular/core';
import { Bank, BankService } from '../bank.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {

  acc_id: number;

  acc_id2:number;
    
    amount:number;

    result:string;

  constructor(private bankSer: BankService,
              private router: Router) { }

  ngOnInit() {
  }



  fundtransfer() {
    this.bankSer.fundtransfer(this.acc_id,this.acc_id2,this.amount)
    .subscribe(response =>{
      this.result = response;
    });
    // alert(this.result);
    // this.router.navigate(['result']);

   
  }

  

  back() {
    this.router.navigate(['trans']);
  }
  back1() {
    this.router.navigate(['main']);
  }
}
