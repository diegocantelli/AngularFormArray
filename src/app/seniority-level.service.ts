import { Injectable } from '@angular/core';

import { SeniorityLevel, seniorityLevels } from './models/seniority-level';

@Injectable({
  providedIn: 'root'
})
export class SeniorityLevelService {

  public levels: SeniorityLevel[] = seniorityLevels;

  constructor() { }
}
