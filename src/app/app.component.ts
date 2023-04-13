import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeamAddEditComponent } from './team-add-edit/team-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'equipos_futbol';

  constructor(private _dialog: MatDialog) {}

  openAddEditTeamForm() {
    this._dialog.open(TeamAddEditComponent);
  }
}
