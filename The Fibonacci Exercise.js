// The Fibonacci Exercise
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// e.g. 0, 1, 1, 2, 3, 5 comes from
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// output would be a list


function fibonacciGenerator(n) {
    var output = [];
    for (var i = 0; i <= n; i++) {
        
            if (i === 0){
                output.push(0);}
        
            else if (i === 1) {
                output.push(1);
            }
        
            else if (i >= 2){
                output.push(output[i-2]+output[i-1]);
            }
            ;}
    return output;}


console.log(fibonacciGenerator(5))

// other option

function fibonacciGenerator(n) {
    var output = [];
    for (var i = 1; i <= n; i++) {
    
        if (i === 1){
            output.push(0);}
        
        else if (i === 2) {
            output.push(1);
            }
        
        else if (i >= 3){
            output.push(output[i-3]+output[i-2]);
            }}
    return output;}

fibonacciGenerator(6)