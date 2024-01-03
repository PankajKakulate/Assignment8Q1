import { Component, Output ,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

   public dataInput : string="";
   
   @Output() public dataemit=new EventEmitter()

   public fun(test:string){
    this.dataInput=test;
     this.dataemit.emit(this.dataInput.toString());
   }
}
