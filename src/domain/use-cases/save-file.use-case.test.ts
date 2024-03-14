import { SaveFile } from './save-file.use-case';
import fs from 'fs';



describe('SaveFileUseCase', () => {

    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs',
        fileName: 'custom-table-name'
    }

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    // beforeEach(()=>{
    //     fs.rmSync('outputs', { recursive: true });
    // });

    afterEach(()=>{
  
        const fileExists = fs.existsSync('outputs');
        if(fileExists) fs.rmSync('outputs', { recursive: true });

        const customOutputFolderExist = fs.existsSync(customOptions.fileDestination);
        if(customOutputFolderExist) fs.rmSync(customOptions.fileDestination, { recursive: true });
    });

    test('should save file with default values', ()=>{

        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'test content'
        }

        const result = saveFile.execute(options);        
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8'});
        
        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(options.fileContent);

    });


    test('should save file with custom values', ()=>{

        const saveFile = new SaveFile();
        

        const result = saveFile.execute(customOptions);
        const fileExists = fs.existsSync(customOptions.fileDestination);
        const fileContent = fs.readFileSync(customFilePath, {encoding: 'utf-8'});

        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);
        
    });

});