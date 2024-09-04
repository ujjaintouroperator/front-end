import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ujjain_travel';

  sub:number=0;
  myForm:FormGroup;

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.myForm = new FormGroup({
      name :new FormControl("",Validators.required),
      email:new FormControl("",[Validators.required,Validators.email]),
      mobile:new FormControl("",[Validators.required,Validators.minLength(10)]),
      address:new FormControl("",Validators.required),
      code: new FormControl("",Validators.required)
    });
  }

  GetEnquiry(){
    this.sub=1;
    if(this.myForm.valid){
      this.http.post("http://localhost:3001/",this.myForm.value).subscribe();
      alert("You will get call for enquiry very soon");
      this.sub=0;
      this.myForm.reset();
    }
  }
}
