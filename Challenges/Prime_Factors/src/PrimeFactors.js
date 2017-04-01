// prime factors class
class PrimeFactors{
    
     /**
      * @param  {} number
      * @return array
      */
     generate(number){

         let array = [];
         let candidate = 2;

         while(number > 1){

             while(number%candidate === 0){

                array.push(candidate);
                number /= candidate;

             }

             candidate++;

         }

         return array;

    }
}

export {PrimeFactors as default}