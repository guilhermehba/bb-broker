import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Portfolio } from './model/portfolio';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private readonly portfoliopUrl = `${environment.api}/portfolios`;
  constructor(private httpClient: HttpClient) {}

  getPortFolio(id: string): Observable<Portfolio> {
    return this.httpClient.get<Portfolio>(`${this.portfoliopUrl}/${id}`);
  }

  putPortFolio(id: string, portfolio: Portfolio): Observable<Portfolio> {
    return this.httpClient.put<Portfolio>(
      `${this.portfoliopUrl}/${id}`,
      portfolio
    );
  }
}
