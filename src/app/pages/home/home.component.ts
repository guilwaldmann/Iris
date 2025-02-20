import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-home',
  imports: [TableComponent, InputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
