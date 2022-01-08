export interface Entry {
  start: string;
  end: string;
  weight: number;
}

export abstract class NormalizedLoader {
  abstract load(path: string): Promise<Array<Entry>>;
}


// Add the missing implementation:

const fs = require('fs')
export class Loader extends NormalizedLoader {

  load(path: string): Promise<Array<Entry>> {
    //read file
    const reader = fs.readFileSync(path, 'utf8', (err: any[], data: any[]) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
    })
    //return data
    return new Promise(function (resolve, reject) {
      let end_result = [];
      let content = reader.split(/\r|\n|\r/);
      for (let i = 1; i < content.length; i++) {
        let data = content[i].split(',');
        if (data != '') {
          let salida: Entry = {
            end: data[1],
            start: data[0],
            weight: Number(data[2])
          };
          end_result.push(salida);
        }
      }
      resolve(end_result);
      reject("wrong");
    });
  }
}

let csvFile: NormalizedLoader = new Loader();
csvFile.load('./src/db/domains.csv');
