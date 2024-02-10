/**
 *  Data types:-
 *  
 *  1.Primitive
 *  2.Non-Primitive
 */

/**
 *  Primitive:-
 * 
 *  string
 *  number
 *  bigint
 *  null(object)
 *  undefined
 *  boolean
 *  Symbol
 */

// String:-
var name = "Abc"

var title = "PW skills"

console.log(name)
console.log(typeof(name))

//Number

var a=10
var b=3.14

console.log(typeof(a))

// BigInt

var Big_int = 1234n
console.log(typeof(Big_int))

console.log(typeof(NaN)) //naumber

//null

console.log(typeof(null)) // exception it is an object

//Undefin

var A
console.log(typeof A)

// boolean

console.log(typeof true)

//Symbol

var s1 = Symbol()

/**
 * 
 * Non-Primitive:-
 * 
 * objects
 */

// Objects

var ob1={
    v1 : "Abc",
    v2 : 18,
}
console.log(typeof ob1)