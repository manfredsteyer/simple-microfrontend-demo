import { Component } from '@angular/core';
import { SimpleShellService } from './shell/simple.shell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private shellService: SimpleShellService) {
  }

  ngOnInit() {
    this.shellService.init();
  }

}
