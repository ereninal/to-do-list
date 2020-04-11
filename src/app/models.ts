export class Model{

    header;
    contents;
    constructor(){
        this.header ="Junior Developer To Do List";
        this.contents =[ 
            new TodoItem("Breakfast",true),
            new TodoItem("AngularJs-Lesson",false),
            new TodoItem("Asp.Net Core-Lesson",false),
            new TodoItem("ReactJs - Lesson",false)

        ];
    }
}
export class TodoItem{
    description;
    action;
    constructor(description,action){
        this.description = description;
        this.action = action;
    }

}
