import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './store';

import { SharedModule } from '../shared/shared.module';
import { StarterRoutingModule } from './starter.routing';

import { StarterEffects } from './store/starter/starter.effects';
import { StarterComponent } from './components/starter/starter.component';
import { StarterService } from './services/starter.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        StarterRoutingModule,
        StoreModule.forFeature('starter', reducers, { metaReducers }),
        EffectsModule.forFeature([
            StarterEffects,
        ]),
    ],
    providers: [
        StarterService
    ],
    declarations: [
        StarterComponent
    ]
})
export class StarterModule {
}
