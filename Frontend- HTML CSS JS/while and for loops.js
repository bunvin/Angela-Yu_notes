// 99 bottles of beer on the wall, 9 bottles of beer. Take 1 down, pass it around, 98 bottles of beere on the wall.


// while loop
var count = 99;
while (count >= 0) {
    if (count > 0){
    var lyrics = count + " bottles of beer on the wall, "+ count +" bottles of beer. Take 1 down, pass it around, " + (count -1) +" bottles of beere on the wall.";
    count--;
    console.log(lyrics)
    ;}

    else if (count == 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        count--;
}}

// for loops
for(var count = 99; count >= 0; count-1){
    if (count > 0){
    var lyrics = count + " bottles of beer on the wall, "+ count +" bottles of beer. Take 1 down, pass it around, " + (count -1) +" bottles of beere on the wall.";
    count--;
    console.log(lyrics)
    ;}

    else if (count == 0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        count--;
}}