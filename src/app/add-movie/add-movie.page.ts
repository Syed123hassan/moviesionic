import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {
  form: any;

  constructor() { }

  ngOnInit() {
  }

  onLogin(form: NgForm){
   return this.form.value;
  }
}
