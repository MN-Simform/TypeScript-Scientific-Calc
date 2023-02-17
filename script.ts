// Variable Declaration
let disp = document.getElementById('disp') as HTMLInputElement;
let memory = 0;

// Function Of Displaying Data
function display(val:string):any {
    disp.value += val;
}

// Function Of Calculation Operations
function calculate(): void {
    let x = disp.value;
    disp.value = eval(x);
}

// Function Of Clear Screen 
function clr(): void {
    disp.value = "";
    (document.getElementById("trig")! as HTMLSelectElement as any)!.selected = true;
    (document.getElementById("fun")! as HTMLSelectElement as any)!.selected = true;
}

// Function Of Backspace
function back(): void {
    disp.value = disp.value.substr(0, disp.value.length - 1);
}

// Function Of PI
function pi(): void{
    const pi = 3.14159265359;
    if(disp.value == ""){
        disp.value = pi.toFixed(2).toString();
    }else{
        disp.value = (parseFloat(disp.value) * pi).toFixed(2).toString();
    }
}

// Function Of Euler's Number
function e(): void{
    const e = 2.71828182846;
    if(disp.value == ""){
        disp.value = e.toFixed(2).toString();
    }else{
        disp.value = (parseFloat(disp.value) * e).toFixed(2).toString();
    }
}

// Function Of 2 Power N
function twoIntoN(): void{
    let powerN = Math.pow(2, +disp.value);
    disp.value = powerN.toString();
}

// Function Of X Square 
function xpow(): void{
    let xpow = disp.value;
    let x = (+xpow) * (+xpow);
    disp.value = x.toString();
}

// Function Of One By Num
function oneByNum(): void{
    let num = disp.value;
    let oneByNum = 1 / parseFloat(num);
    disp.value = oneByNum.toFixed(2).toString();
}

// Function Of Absolute
function abslt(): void{
    let ConvertAbsolute = Math.abs(parseFloat(disp.value));
    disp.value = ConvertAbsolute.toString();
}

// Function Of Exponent 
function expo(): void{
    let xponent = Math.exp(parseFloat(disp.value));
    disp.value  = xponent.toFixed(2).toString();
}

// Function Of Square Root 
function sqroot(): void {
    disp.value = Math.sqrt(parseFloat(disp.value)).toFixed(2).toString();
}

// Function Of Factorial 
function fact(): void{
    let fact = 1;
    for(let num=1; num<=parseFloat(disp.value); num++){
        fact *= num;
    }
    disp.value = fact.toString();
}

// Function Of 10 Power X
function powX(): void{
    disp.value = (Math.pow(10, parseFloat(disp.value))).toString();
}

//Function Of Log  //Gives Compilation Error - 'log10' does not exist on type 'Math'
// function log(): void{
//     disp.value = (Math.log10(parseFloat(disp.value)).toString());
// }

// Function Of Natural Log 
function natLog(): void{
    disp.value = (Math.log(parseFloat(disp.value))).toString();
}

// Function Of Plus/Minus Button
function plusMinus(): void{
    let x = disp.value;
    let y = parseFloat(x) * -1;
    disp.value = y.toString();
}

// Functionality Of Trignometry Button
function trignometry(): void{
    let opt = (document.getElementById("trigno") as HTMLSelectElement).value;
    if(opt === "sin"){
        disp.value = (Math.sin(parseFloat(disp.value) * Math.PI / 180)).toFixed(2).toString();
    }
    else if(opt === "cos"){
        disp.value = (Math.cos(parseFloat(disp.value) * Math.PI / 180)).toFixed(2).toString();
    }
    else if(opt === "tan"){
        disp.value = (Math.tan(parseFloat(disp.value) * Math.PI / 180)).toFixed(2).toString();
    }
}

// Functionality Of Function Button
function func(): void{
    let opt = (document.getElementById("func") as HTMLSelectElement).value;
    if(opt == "abs"){
        disp.value = (Math.abs(parseFloat(disp.value))).toFixed(2).toString();
    }
    else if(opt == "floor"){
        disp.value = (Math.floor(parseFloat(disp.value))).toFixed(2).toString();
    }
    else if(opt == "ceil"){
        disp.value = (Math.ceil(parseFloat(disp.value))).toFixed(2).toString();
    }
}

// Function To Calculate Degree to Radian
function deg(): void{
    disp.value = (parseFloat(disp.value) * Math.PI / 180).toFixed(2);
}

// Function Of Fixed Exponent
function fixedExpo(): void{
    disp.value = parseFloat(disp.value).toExponential();
}

// Memory Functions

// Clear Memory 
function mcFunc(): void{
    memory = 0;
    disp.value = "";
    console.log(memory);
}

// Read Memory
function mrFunc(): void{
    disp.value = memory.toString();
    console.log(memory);
}

// Memory Plus 
function mpFunc(): void{
    memory = memory + eval(disp.value);
    console.log(memory);
}

// Memory Minus 
function mmFunc(): void{
    memory = memory - eval(disp.value);
    console.log(memory);
}

// Save Memory
function msFunc(): void{
    memory = eval(disp.value);
    console.log(memory);
}