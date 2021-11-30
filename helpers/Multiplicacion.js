const { error } = require('console');
const colors = require('colors');
const fs = require('fs');


// Calculando tabla de multiplicar por medio de Promise
/* const CalcularMultiplicacion= (numero)=>{

        

     return new Promise((resolve,reject)=>{

                console.log("________________________\n");
                console.log(`      TABLA DEL ${numero} `);
                console.log("________________________");
    
            let resultado= '';

                for( let multiplicador= 0 ; multiplicador <=10; multiplicador+=1){

                        
                    resultado += `${numero} X ${multiplicador}= ${numero*multiplicador}\n`;

                }

             

                    
                    fs.writeFileSync(`Tabla ${numero} `,resultado);

                    if(resultado){
                        resolve(`Tabla ${numero}`);
                    }
                    
                    reject('No se Guardo el archivo Correctamente');
          

     })

           

       /*      fs.writeFile(`Tabla-${numero}.txt`,resultado,'utf8',(err)=>{
                if(err) throw err;

                console.log("El archivo de guardo correctamente");

            } ) 

}  */


const CalcularMultiplicacion= async(numero,listar,hasta)=>{

        

   try{
        
             
   
           let resultado= '';
           let consola= '';


               for( let multiplicador= 0 ; multiplicador <=hasta; multiplicador+=1){

                       
                   resultado += `${numero} X ${multiplicador} = ${numero*multiplicador}\n`;

                   consola += `${numero} X ${multiplicador}=`.red + 
                   `${numero*multiplicador}\n`.green;  

               }
               
                    if(listar){
                        console.log("________________________\n");
                        console.log(     " TABLA DEL".yellow ,`${numero}`.blue);
                        console.log("________________________");
                        
                                console.log(consola);
                    }
                   
                   fs.writeFileSync(`./salida/Tabla${numero}.txt`,resultado);
                 
    }catch(error){
        throw error;

    }


    return `Tabla ${numero}`;
            

} 

module.exports={
    CalcularMultiplicacion
}