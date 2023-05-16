import { Component, ViewChild } from '@angular/core';
import { IonInput, IonCheckbox } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isInputEnabled1:boolean = false
  isInputEnabled2:boolean = false
  isInputEnabled3:boolean = false
  Name!:string;
  Age!:number;
  Color!:string;
  Food!:string;
  Gender!:string;
  Line!:string;
  Facebook!:string;
  Instagram!:string;
  


  onSave() {
    console.log('Name:',this.Name);
    console.log('Age:',this.Age);
    console.log('Gender:',this.Gender);
    console.log('Color:',this.Color);
    console.log('Food:',this.Food);
    console.log('Line:',this.Line);
    console.log('Facebook:',this.Facebook);
    console.log('Instagram:',this.Instagram);
    
} 
  
  constructor() {}

}
