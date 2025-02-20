import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
} from '@angular/material/dialog';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-update-dialog',
  imports: [MatButtonModule, MatDialogContent, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-dialog.component.html',
  styleUrl: './update-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UpdateDialogComponent {
  data = inject(MAT_DIALOG_DATA);

  readonly email = new FormControl(this.data.email, [Validators.required, Validators.email]);

  errorMessage = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
}