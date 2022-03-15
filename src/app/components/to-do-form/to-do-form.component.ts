import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { ToDo } from 'src/app/models/ToDo.model';

import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit
{
	constructor(private modalService: ModalService){}

	ngOnInit = () => {}

	display$: Observable<boolean> = this.modalService.watch();

	@Input() toDoList!:ToDo[];

	@Input() stateForm:string = '';

	@Output() savedTodo = new EventEmitter<ToDo>();

	@Input() toDo!:ToDo;

	toggle = ():void =>
	{
		this.modalService.toggle();
	};

	saveToDo = ():void =>
	{
		this.savedTodo.emit(this.toDo);

		setTimeout(() =>
		{
			this.modalService.toggle();
		},500)
	};
}
