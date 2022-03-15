import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from './models/ToDo.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent
{
	allToDoList:ToDo[] | any[]  = JSON.parse(localStorage.getItem('allToDoList') || '[]');

	toDoList:Observable<ToDo[]> = new Observable<ToDo[]>(observer =>
		{
			setInterval(() => observer.next(this.allToDoList?.filter(toDo => toDo.complete === false && toDo.doing === false)), 1000);
		});

	doingToDoList:Observable<ToDo[]> = new Observable<ToDo[]>(observer =>
		{
			setInterval(() => observer.next(this.allToDoList?.filter(toDo => toDo.doing === true)), 1000);
		});

	completedToDoList:Observable<ToDo[]> = new Observable<ToDo[]>(observer =>
		{
			setInterval(() => observer.next(this.allToDoList?.filter(toDo => toDo.complete === true)), 1000);
		});

	stateForm!:string;

	toDoForm:ToDo =
	{
		id:0,
		title:'',
		description:'',
		complete:false,
		doing:false
	}

	onSavedToDo = (formToDo:ToDo) =>
	{
		if(this.stateForm === 'add')
		{
			formToDo.id = this.allToDoList.length;

			this.allToDoList.push(formToDo);

			this.toDoForm =
			{
				id:0,
				title:'',
				description:'',
				complete:false,
				doing:false
			}

			localStorage.setItem('allToDoList', JSON.stringify(this.allToDoList));
		}

		else if (this.stateForm === 'edit')
		{
			console.log(formToDo);

			this.allToDoList.map(toDo =>
			{
				toDo.id === formToDo.id
				?
					{...toDo, title:formToDo.title, description:formToDo.description}
				:
					toDo
			});

			this.toDoForm =
			{
				id:0,
				title:'',
				description:'',
				complete:false,
				doing:false
			}

			localStorage.setItem('allToDoList', JSON.stringify(this.allToDoList));
		}

	};

	onEditToDo = (editToDo:ToDo) =>
	{
		this.toDoForm = editToDo;
	}

	onRemoveToDo = (removeToDo: ToDo) =>
	{
		const toDoIndex = this.allToDoList.findIndex(toDo => toDo.id === removeToDo.id);

		const newToDos = [...this.allToDoList];

		newToDos.splice(toDoIndex, 1);

		localStorage.setItem('allToDoList', JSON.stringify(newToDos));

		this.allToDoList = JSON.parse(localStorage.getItem('allToDoList') || '[]')
	}

	onStateForm = (state:string) =>
	{
		this.stateForm = state;
	};
}
