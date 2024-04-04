
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { DataResolverService } from './shared/service/data-resolver.service';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'recipes', loadChildren: () => import('./recepies/recepie.module').then(m => m.RecepieModule)},
  {path: 'shopping', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)}
  //{path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 