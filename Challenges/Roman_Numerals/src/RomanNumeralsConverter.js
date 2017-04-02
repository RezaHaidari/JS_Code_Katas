// prime factors class
class RomanNumeralsConverter{
      
    constructor(){

        this.lookup = {
        '1000.0':'M',
        '900.0':'CM',
        '500.0':'D',  
        '400.0':'CD',
        '100.0':'C',
        '90.0':'XC',  
        '50.0':'L',
        '40.0':'XL',
        '10.0':'X',
        '9.0':'IX',
        '5.0':'V',
        '4.0':'IV',  
        '1.0':'I'
        }

    }

    
     /**
      * @param  {} number
      * @return string
      */
     converter(number){

        let solution = '';

        for(let [limit, value] of Object.entries(this.lookup)){

             while(number >= limit){

                solution += value
                number -= limit;

             }

            
        }

        return solution;

     }
}

export {RomanNumeralsConverter as default}