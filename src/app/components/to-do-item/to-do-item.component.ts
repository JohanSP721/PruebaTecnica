import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo.model';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit
{
	constructor(private modalService: ModalService){}

	ngOnInit = (): void => {}

	@Input() toDo!:ToDo;

	@Output() stateForm = new EventEmitter<string>();

	@Output() editedToDo = new EventEmitter<ToDo>();

	@Output() removedToDo = new EventEmitter<ToDo>();

	editToDo = (): void =>
	{
		this.stateForm.emit('edit');
		this.editedToDo.emit(this.toDo);
		this.modalService.toggle();
	}

	onComplete = ():void =>
	{
		this.toDo.complete = !this.toDo.complete;
		this.toDo.doing = false;
	}

	onDoing = ():void =>
	{
		this.toDo.doing = !this.toDo.doing;
		this.toDo.complete = false
	}

	onDelete = () :void =>
	{
		this.removedToDo.emit(this.toDo);
	}
}
