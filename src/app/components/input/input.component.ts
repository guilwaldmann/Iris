import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { UsersSearchService } from '../../services/users-search.service';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  imports: [MatIconModule, MatInputModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  userSearch = inject(UsersSearchService)

  HandleInputChange(event: Event) {
    this.userSearch.InputSearch(event)
  }
}
