import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddAccountComponent } from './add-account/add-account.component';
import { ShowBalanceComponent } from './show-balance/show-balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { HistoryComponent } from './history/history.component';
import { MainComponent } from './main/main.component';
import { TransComponent } from './trans/trans.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    ShowBalanceComponent,
    DepositComponent,
    WithdrawComponent,
    FundtransferComponent,
    HistoryComponent,
    MainComponent,
    TransComponent,
    LoginComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
