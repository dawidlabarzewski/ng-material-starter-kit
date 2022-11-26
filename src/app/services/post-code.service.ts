import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { PostCodeDetailsModel } from '../models/post-code-details.model';

@Injectable()
export class PostCodeService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(country: string, postcode: string): Observable<PostCodeDetailsModel> {
    return this._httpClient.get<any>(`https://api.zippopotam.us/${country}/${postcode}`).pipe(
      map(val => ({
        post_code: val['post code'],
        country: val['country'],
        country_abbreviation: val['country abbreviation']
      }))
    );
  }
}
