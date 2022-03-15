import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/models/ToDo.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges
{
	constructor(){}

	@Input() allToDoList?:ToDo[];

	@Input() completedToDoList!:Observable<ToDo[]>;

	completedLength:number = 0;

	ngOnChanges():void
	{
		if(this.completedToDoList)
		{
			this.completedToDoList.subscribe(
				toDoList =>
				{
					this.completedLength = toDoList.length;
				})
		}
	}
}
