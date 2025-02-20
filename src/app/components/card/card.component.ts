import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { data } from '../../skeleton/data';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component'
import { UsersSearchService } from '../../services/users-search.service';

export interface DialogData {
  id: string,
  name: string,
  email: string,
  age: string,
}

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  userSearch = inject(UsersSearchService)
  dialog = inject(MatDialog);
  users = this.userSearch.users
  
  openDialog(user : DialogData) {
    this.dialog.open(UpdateDialogComponent, {data: user});
  }
}
