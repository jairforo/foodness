import { Injectable } from '@angular/core';

import { Api } from './api';

@Injectable()
export class Meals {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('meals', params);
  }
}
