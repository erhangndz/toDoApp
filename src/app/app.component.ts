import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
model = new Model();
isDisplay = false;


getName() {
  return this.model.user;
}

getToDoList(){
  if(this.isDisplay){

    return this.model.items;
  }
  return this.model.items.filter(item=>!item.status);

}


addItem(value:string){
 if(value!=''){
this.model.items.push(new ToDoItem(value,false))
 }
}
}
