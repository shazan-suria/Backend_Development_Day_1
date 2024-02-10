// for loop

for( var i =0 ; i<10 ; i++){
    console.log("Hello World..")
}

console.log("While loop")
//while

i=0
while(i<10){
    console.log("Hello World..")
    i++
}

// continue and break statment

for(i = 1 ;i<=50;i++){
    if(i%2 !=0){
        continue;
    }
    console.log(i)
}

for(i = 1 ;i<=50;i++){
    if(i%5 ==0){
        break;
    }
    console.log(i)
}