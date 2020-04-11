import { Component } from '@angular/core';
import { Model,TodoItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  displayAll = false;
  getHeader(){
    return this.model.header;
  }
  getContents(){
    if(this.displayAll)
      return this.model.contents;
    else
      return this.model.contents.filter(content => !content.action);
    
  }
  addItem(value){
    if(value!=''){
      this.model.contents.push(new TodoItem(value,false));
    }
  }
  getAllContent(){
    return this.model.contents;
  }
}
