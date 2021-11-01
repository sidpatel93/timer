//process.stdout.write('\x07');

let args = process.argv.slice(2);
let time = 0;
for (let e of args) {
  let digit = Number(e);
  time += digit;
  
  if (digit >= 0 && typeof(digit) === 'number') {
    setTimeout(()=>{
      process.stdout.write('\x07');
      console.log(`timer is at ${e} seconds`);
    }, time * 1000);
  }

}
