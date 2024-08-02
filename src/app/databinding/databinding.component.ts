import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

 /* msg = "Welcome"
  txt = "Angular is frontend framework"
  imgPath = "assets/images/HD-wallpaper-joker-gun-shot.jpg";
  greeting=""
  num1:number=0;
  num2:number=0;
  name="";
  

  sayHello(){
    this.name = "sham";
   // alert("Hello Student")
  }
  notHello(){
    this.name=""
  }*/
    globalVal:any
  sum:any;
    fun1(val:any){
      this.globalVal = val
    console.log(val)
    }

   /*fun2(num1:any,num2:any){
      this.sum=parseInt(num1)+parseInt(num2);
    }*/
   
   
   
   msg:any
    keyEvent(e:any){
      this.msg=e.target.value
      console.log(this.msg)
    }
  
    
}

