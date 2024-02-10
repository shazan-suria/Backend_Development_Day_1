var num =20

if(num % 2 ==0){
    console.log("Even")
}else{
    console.log("Odd")
}

//ternary operator
13 % 2 == 0 ? console.log("Even") : console.log("Odd")

// Nested condition

if(num>4){
    if(num<78){
        console.log("num i greater than 4 and less than 78")
    }
    else{
        console.log("num is greater than 4 but not less than 78 ")
    }
}else{
    console.log("num is less than 4")
}

num >4 ? num < 78 ?  console.log("num i greater than 4 and less than 78") 
: console.log("num is greater than 4 but not less than 78 ") 
: console.log("num is less than 4")

// switch

var frute ="Apple"

switch(frute){
    case "Banana":
        console.log("it is Apple")
        break
    case "Mango":
        console.log("it is Apple")
        break
    case "Apple":
        console.log("it is Apple")
        break
    default:
        console.log("No data match")
}