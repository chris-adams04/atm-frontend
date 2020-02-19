import { Component, OnInit } from '@angular/core';
import { Bank, BankService } from '../bank.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

    user: Bank = new Bank("",0,"");
    result:string;

  constructor(private bankSer: BankService,private router:Router) { }

  ngOnInit() {
  }

  createAccount():void{
      this.bankSer.createAccount(this.user)
          .subscribe(data => {
              this.result=data});

      // alert(this.result);
      //         this.router.navigate(['trans']);

              
      
  }

  // alert() {
  //   console.log("hi");
  // }
  // onSubmit(){
  //   alert('2');
  //   this.router.navigate(['trans']);
  // }
  
}
