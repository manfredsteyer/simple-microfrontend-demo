import { Component } from '@angular/core';
import { SimpleShellService } from '../shell/simple.shell.service';


@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {
    constructor(private shellService: SimpleShellService) {
    }

    navigate(clientName: string, path: string) {
        this.shellService.navigate(clientName, path);
    }
}
