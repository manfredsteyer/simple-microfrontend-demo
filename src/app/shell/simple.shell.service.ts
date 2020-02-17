import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SysEvent } from './sys-event';

@Injectable({providedIn: 'root'})
export class SimpleShellService {
    
    frontends: { [name: string]: HTMLElement } = {};

    serviceBus = new Subject<SysEvent>();

    init() {
        this._navigate(location.hash.substr(1));

        this.serviceBus.subscribe(msg => {
            console.debug('msg', msg);
        })
        
        window['_serviceBus'] = this.serviceBus;

        this.load('client-a');
        this.load('client-b');
    }

    load(clientName: string) {
        if (this.frontends[clientName]) return;

        const outlet = document.getElementById('content');
        const bundle = `assets/micro-frontends/${clientName}/main.js`;
    
        const script = document.createElement('script') as HTMLScriptElement;
        script.src = bundle;
        document.body.appendChild(script);
    
        const rootElm = document.createElement(clientName);
        rootElm.hidden = true;
        outlet.appendChild(rootElm);
    
        this.frontends[clientName] = rootElm;
    }
  
    _navigate(path: string) {
        const segments = path.split('/');
        const clientName = segments.length >= 2 ? segments[1] : '';
        this.navigate(clientName, path);
    }

    navigate(clientName: string, path: string) {
      
      if (!this.frontends[clientName]) {
        this.load(clientName);
      }
  
      for (const fe of Object.getOwnPropertyNames(this.frontends)) {
        const rootElm = this.frontends[fe];
        rootElm.hidden = true;
      }

      this.frontends[clientName].hidden = false;
  
      location.hash = path;
  
    }
    
}