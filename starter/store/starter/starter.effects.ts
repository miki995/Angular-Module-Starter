import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/internal/operators';
import { of } from 'rxjs';

import * as starterActions from '/starter/store/starter/starter.actions';

import { IPlanningState } from '../index';
import { IAppState } from '../../../store';
import { StarterService } from '../../services/starter.service';


@Injectable()
export class StarterEffects {

    @Effect()
    simpleEffect$ = this.actions$
        .pipe(
            ofType(starterActions.STARTER_GET),
            switchMap(() => {

                return of({ type: starterActions.STARTER_GET_SUCCESS });
            })
        );

    constructor(private readonly actions$: Actions,
                private readonly store: Store<IPlanningState>,
                private readonly starterService: StarterService) {
    }
}
