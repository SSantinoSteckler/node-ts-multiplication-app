import { yarg } from './plugin/args.plugin';
import { ServerApp } from './presentation/server-app';

console.log(process.argv);

// console.log(yarg.b);

(async () => {
  await main();
})();

async function main() {
  console.log(yarg);
  const { s: showTable, b: base, l: limit, d: destination, n: name } = yarg;

  ServerApp.run({
    base: base,
    limit: limit,
    showTable: showTable,
    name: name,
    destination: destination,
  });
}
