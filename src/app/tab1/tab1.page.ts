import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    let num = 10;
    debugger;
    num += 10 ;
    num = num *3;
    console.log('INICIO APLICACION');
    console.log({num});
    
  }
  constructor() {}

}
