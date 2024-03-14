export interface CreateTableUseCase {
    execute: (options: CreateTableOpt) => string;
}

export interface CreateTableOpt {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {

    constructor(
        /* 
            DI - Dependency Injection
        */
    ){}


    execute({ base, limit = 10 }: CreateTableOpt) {
        
        let outputMessage: string = '';

        for (let i = 1; i <=limit; i++) {
            outputMessage += `${base} x ${i} = ${base*i}`;
            if(i<limit) outputMessage += '\n';
        }

        return outputMessage;
    }

}