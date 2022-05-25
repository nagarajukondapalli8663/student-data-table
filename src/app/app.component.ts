import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'student-data-table';
listData:any;


  userForm:FormGroup
  item: any;
  constructor(private fb:FormBuilder){

    this.listData=[];
    this.userForm = this.fb.group({
      name:['',Validators.required],
      address:['',Validators.required],
      contactNo:['',Validators.required],
      gender:['',Validators.required]

    })
  }
  addItem()
  {
    this.listData.push(this.userForm.value);

  }
  Reset(){
    this.userForm.reset();
  }
  i:any;
  removeItem(i:any)
  {
    delete this.listData[i]

  }
 
}





