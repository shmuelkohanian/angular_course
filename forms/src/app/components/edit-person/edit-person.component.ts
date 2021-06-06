import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  personToEdit: Person = {
    id:1,
    firstName : "shmuel",
    lastName: "kohanian",
    email: "shmuelkohanian@gmail.com"
  };
  // firstNameControl!: FormControl;
  personForm!: FormGroup;


  constructor(private formBilder: FormBuilder) { }

  ngOnInit(): void {
    // this.firstNameControl = this.formBilder.control(this.personToEdit.firstName, [Validators.maxLength(6), Validators.required]);
    this.personForm = this.formBilder.group({
      id:[this.personToEdit.id],
      firstName:[this.personToEdit.firstName, [Validators.required]],
      lastName:[this.personToEdit.lastName],
      email:[this.personToEdit.email, [Validators.email]]
    })
  }

  save(){
    this.personToEdit =this.personForm.value;

  }


}
