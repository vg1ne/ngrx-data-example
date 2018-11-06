import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../../environments/environment';
import {entityConfig} from './entity-metadata';
import {NgrxDataModule} from 'ngrx-data';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    NgrxDataModule.forRoot(entityConfig),
  ],
  declarations: []
})
export class AppStoreModule { }
