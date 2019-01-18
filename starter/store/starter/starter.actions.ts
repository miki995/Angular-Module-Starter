import { Action } from '@ngrx/store';

export const STARTER_GET = '[Starter]:  get starter';
export const STARTER_GET_SUCCESS = '[Starter]:  get starter success';
export const STARTER_GET_FAIL = '[Starter]:  get starter fail';

export class StarterGet implements Action {
  readonly type = STARTER_GET;

  constructor(public payload: any) {
  }
}

export class StarterGetSuccess implements Action {
  readonly type = STARTER_GET_SUCCESS;

  constructor(public payload?: any) {
  }
}

export class StarterGetFail implements Action {
  readonly type = STARTER_GET_FAIL;

  constructor(public payload: any) {
  }
}

export type Actions =
  StarterGet
  | StarterGetSuccess
  | StarterGetFail;
