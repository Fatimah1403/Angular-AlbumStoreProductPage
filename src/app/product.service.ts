import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { AlbumStorePage } from '../../e2e/app.po';
import { IAlbum } from './product-page/album';
@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }

  getAlbum(): IAlbum[] {
    return  //this._http.get<IAlbum[]>(this._albumUrl)
    
  }


}
