import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
    public globalSeparator: number = 6;
  constructor() { }
}
