
class Addition{
    static numOne=2;
    static numTwo=-6;
    static calcSum(){
       return Math.abs(this.numOne+this.numTwo);
     }
 }
 
 console.log(Addition.calcSum());
