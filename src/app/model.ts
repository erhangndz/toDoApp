export class Model {
  user;
  items;

  constructor(){
    this.user= "Erhan";
    this.items=  [

      new ToDoItem("Breakfast",true),
      new ToDoItem("Study",false),
      new ToDoItem("Cleaning",false),
      new ToDoItem("Pay Bills",false),
    ];
  }
}



export class ToDoItem {
  description;
  status;

  constructor(description: string,status :boolean){
    this.description = description;
    this.status=status;
  }
}
