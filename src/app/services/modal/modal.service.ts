import { Injectable } from '@angular/core';

import {Observable, scan, startWith, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService
{
	toggleLabels$ = new BehaviorSubject<boolean>(false);

	watch = () =>
	{
		return this.toggleLabels$.asObservable();
	}

	toggle = () =>
	{
    	this.toggleLabels$.next(!this.toggleLabels$.getValue());
	}
}
