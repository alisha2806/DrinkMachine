import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { LemonComponent } from '../lemon/lemon.component';
import { CoffeeComponent } from '../coffee/coffee.component';
import { ChocolateComponent } from '../chocolate/chocolate.component';

@Component({
  selector: 'app-first-display',
  templateUrl: './first-display.component.html',
  styleUrls: ['./first-display.component.css']
})
export class FirstDisplayComponent implements OnInit {

  constructor(private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  openLemon() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(LemonComponent);
  }

  openCoffee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(CoffeeComponent);
  }

  openChocolate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(ChocolateComponent);
  }



}
