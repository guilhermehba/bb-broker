import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';
import { Acao, AcoesAPI } from './modelo/acoes';

const API = environment.api
@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  getAcoes(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient.get<AcoesAPI>(`${API}/acoes`,{params})
    .pipe(
      tap((valor) => console.table(valor)),
      pluck('payload'),
      map((acoes) =>
        acoes.sort((acaoA, acaoB) => this.ordenaPorCodigo(acaoA, acaoB))
      )
    );
  }
  private ordenaPorCodigo(acaoA: Acao, acaoB: Acao) {
    if (acaoA.codigo > acaoB.codigo) {
      return 1;
    } else if (acaoA.codigo > acaoB.codigo) {
      return -1;
    } else return 0;
  }
}
