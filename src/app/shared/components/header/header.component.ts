import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[

    trigger('collapse',[
      state('small',style({height:'0px'})),
      state('large',style({height:'350px'})),
      transition('small <=> large',animate('400ms ease-in'))
  ])]

})
export class HeaderComponent implements OnInit {

 state: string = 'small';

  constructor() { }

  ngOnInit(): void {
  }

  colapsar()
  {
    if(this.state === 'small'){
      this.state = 'large';
     // document.getElementById("navWrapper").style.position = "relative";
    }else{
      this.state = 'small';
    //  document.getElementById("navWrapper").style.position = "absolute";
    }
  }

  toRefEconomy(){
    document.getElementById("RefEconomy").scrollIntoView();
    this.colapsar();
  }

  toQueEs(){
    document.getElementById("QueEs").scrollIntoView();
    this.colapsar();
  }
  
  toPorque(){
    document.getElementById("Porque").scrollIntoView();
    this.colapsar();
  }

  toComoAyuda(){
    document.getElementById("ComoAyuda").scrollIntoView();
    this.colapsar();
  }

  toComoUsar(){
    document.getElementById("ComoUsar").scrollIntoView();
    this.colapsar();
  }

  toContacto(){
    document.getElementById("Contacto").scrollIntoView();
    this.colapsar();
  }
  
}
