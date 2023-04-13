import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-team-add-edit',
  templateUrl: './team-add-edit.component.html',
  styleUrls: ['./team-add-edit.component.scss'],
})
export class TeamAddEditComponent {
  teamForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.teamForm=this._fb.group({
      name:'',
      stadium:'',
      website:'',
      nationality:'',
      year:'',
      coach:'',
      size:'',
      price:'',
    })
  }

  onFormSubmit() {
    if(this.teamForm.valid) {
      console.log(this.teamForm.value);
    }
  }

}
