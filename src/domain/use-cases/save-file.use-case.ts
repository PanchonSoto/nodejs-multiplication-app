import fs from 'fs';



export interface SaveFileUseCase {
    execute: (opntions: SaveFileOpt) => boolean;
}

export interface SaveFileOpt {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}


export class SaveFile implements SaveFileUseCase {

    constructor(

    ){}

    execute({fileContent, fileDestination='outputs', fileName='table' }: SaveFileOpt): boolean {
        
        try {
            fs.mkdirSync(fileDestination, { recursive: true });

            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
            console.log('File created!');
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }

}
