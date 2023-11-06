import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private tagHistory: string[] = [];
  //almacena los valores de la api
  gifList: Gif[] = [];

  private apiKey: string = 'FOI7siuEXiL48bim54zVxTl7QvHcEdVv';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {}

  get tagHistoryAcceder() {
    return [...this.tagHistory];
  }

  private organizeTag(tag: string) {
    tag = tag.toLowerCase();
    //borro el tag anterior
    //si el tag incluye o es igual al anterior se elimina
    if (this.tagHistory.includes(tag)) {
      this.tagHistory = this.tagHistory.filter((oldTag) => oldTag !== tag);
    }
    //Inserta al inicio el nuevo tag
    this.tagHistory.unshift(tag);
    this.tagHistory = this.tagHistory.splice(0, 10);
  }

  //        `${this.serviceUrl}/search?api_key=FOI7siuEXiL48bim54zVxTl7QvHcEdVv&q=valorant&limit=10`

  buscarTag(tag: string) {
    if (tag.length == 0) return;
    this.organizeTag(tag);

    //consumiendo el api
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);
    //
    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
      });
  }
}
