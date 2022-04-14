import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar: MatSnackBar) {}

  showNotification(text: string) {
    this.snackBar.open(text, "Ok", {
      duration: 1000,
      horizontalPosition: "center",
      verticalPosition: "top"
    });
  }
}
