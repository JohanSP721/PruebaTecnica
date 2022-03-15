import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit
{
	constructor(private modalService: ModalService){}

	ngOnInit = (): void => {}

	@Output() stateForm = new EventEmitter<string>();

	addToDo = (): void =>
	{
		this.stateForm.emit('add');

		this.modalService.toggle();
	}
}
