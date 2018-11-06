import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import {NgrxDataToastService} from './ngrx-data-toast.service';
import {entityConfig} from './entity-metadata';
import {NgrxDataModule} from 'ngrx-data';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    NgrxDataModule.forRoot(entityConfig),
  ]
})
export class AppStoreModule {
  constructor(toastService: NgrxDataToastService) {}
}
