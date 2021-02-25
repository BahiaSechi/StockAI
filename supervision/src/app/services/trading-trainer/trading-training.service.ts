import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradingTrainingService {

  private achat: Map<string, Achat[]>; // Abreviation d'action et quantité acheté

  constructor() { }
}
