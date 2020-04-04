import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  state: string;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  save(){
    let location = {
      state: this.state
    }
    localStorage.setItem('location', JSON.stringify(location))
    this.route.navigate(['']);
  }
}
