const argv= require('yargs')
                    .option({'b':{
                        alias:'base',
                        type:'number',
                        demandOption: true,
                        describe: 'Base de la tabla de multiplicar'


                        
                    },

                    'l':{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Lista la tabla de multiplicar'

                    },
                    'h':{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'limite hasta donde debe llegar la tabla de multiplicar'

                    }
                
                
                })
                    .check((argv,options)=>{
                        
                        if(isNaN(argv.base)){
                            throw 'Tienes que ingresar un numero';
                        }
                        return true;
                    })
                    .argv;

module.exports= argv;                    