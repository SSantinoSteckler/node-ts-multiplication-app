import fs from 'fs';
import { yarg } from './plugin/args.plugin';

const { b: base, l: limit, s: show } = yarg;

let outputMessage = '';

const headerMessage = `Tabla del ${base}\n`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (show) {
  console.log(outputMessage);
}

const outputPath = `outputs/folder1/folder2`;

fs.mkdirSync(outputPath, { recursive: true });

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File Created!');
