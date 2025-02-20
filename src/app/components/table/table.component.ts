import { Component, inject } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-table',
  imports: [MatButtonModule, MatIconModule, CardComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogComponent, {});
  }
}
