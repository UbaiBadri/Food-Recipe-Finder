import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchRecipeService {

  private apiUrl = 'https://api.api-ninjas.com/v1/recipe';
  private apiKey = 'VKeHTBM7Yrw5mR0xDo5skw==Dn1yKqFYk82CvkmN';

  constructor(private http: HttpClient) { }

  getRecipes(toSearchRecipe : string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });
    return this.http.get(`${this.apiUrl}?query=${toSearchRecipe}`, { headers });
  }

  getIngredients(toSearchRecipe : string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });
    return this.http.get(`${this.apiUrl}?query=${toSearchRecipe}`, { headers });
  }

  getInstruction(toSearchRecipe : string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });
    return this.http.get(`${this.apiUrl}?query=${toSearchRecipe}`, { headers });
  }
  
}

