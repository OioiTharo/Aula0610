import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MyDialogComponent} from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoo';
  constructor(public dialog: MatDialog){}
  //metodo pra abrir nosso dialog
  openDialog(): void{
    this.dialog.open(MyDialogComponent)
  }
}
