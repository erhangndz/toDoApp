import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoApp';
user = "Erhan";
items =  [
  {description:"Breakfast",status:"Done"},
  {description:"Sports",status:"Not Done"},
  {description:"Study",status:"Not Done"},
  {description:"Cleaning",status:"Not Done"}
];

}
