import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAccountComponent } from './add-account/add-account.component';
import { ShowBalanceComponent } from './show-balance/show-balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { HistoryComponent } from './history/history.component';
import { MainComponent } from './main/main.component';
import { TransComponent } from './trans/trans.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'', redirectTo:'main', pathMatch:'full'},
{ path:'login', component:LoginComponent },
{path:'main', component:MainComponent},
{path: 'trans', component:TransComponent},
{path: 'result', component: ResultComponent},
{ path:'ShowBalance', component:ShowBalanceComponent  },
{ path:'Deposit', component:DepositComponent },
{ path:'WithDraw', component:WithdrawComponent },
{ path:'FundTransfer', component:FundtransferComponent },
{ path:'History', component:HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
