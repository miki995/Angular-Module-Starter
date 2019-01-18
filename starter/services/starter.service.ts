import { Injectable } from '@angular/core';
import { config } from '../../config/config';
import { HttpService } from '../../services/http.service';

@Injectable()
export class StarterService {

  private starterServiceUrl = config.apiEndpoint + '/api/starter';  // URL to starter web api

  constructor(private readonly httpService: HttpService) {
  }

  getPlannings(params: string) {

    return this.httpService.get(`${this.starterServiceUrl}`);
  }
}
