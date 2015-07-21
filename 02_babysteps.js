// Sums all passed arguments and returns sum to stdout
// No error handling

// Prints out all command line arugments
// [ 'node', 'path/to/program', 'arg1', 'arg2' ]
// console.log(process.argv);
var argSum = 0;

var argvLength = process.argv.length;
for(var i = 2; i < argvLength; i++) {
    // console.log("index: " + i);
    // console.log("arg: " + process.argv[i]);
    // console.log("");
    argSum += +process.argv[i];
}

console.log(argSum);

