// prva varijanta so inkrement

// var size = prompt("What is the size of the pyramid");
// function drawPyramid(size){
// 	var result = " ";

// 		for(var i = 0; i<size; i++){
// 			result+="#"; 
// 			console.log(result);

// 		}
// 	}

// drawPyramid(size);

// //vtora varijanta so dekrement!! za doma! da se printa baklava!!

// ________________________________________________________________

// Prototypes - kreirame objekti so direknto zadavanje  na svojstva.

// function Rabbit(type){
// 	this.tip = type;
// }

// Rabbit.prototype.speak = function(phrase){
// 	console.log("The" +this.tip +"Rabbit says" + phrase);

// }

// var zeko = new Rabbit("A");
// zeko.speak("Hello world");

// primer 1

// function Person(firsName, lastName, age, proffesion){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.age = age;
// 	this.proffesion = proffesion;
// }

// Person.prototype.greeting = function(phrase){
// 	alert(phrase + "I'm" + this.firstName + " " +this.lastName + ". I am " +this.age + "and work as" + this.proffesion);
// }

// var person = new Person ("Sanja", "tashkovska", 24, "fromt-end developer");
// person.greeting("hello");
// console.log(person.firstName);

// primer 2

// function Teacher(firstName, lastName, gender, university, subject){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.gender = gender;
// 	this.university = university;
// 	this.subject = subject;
// }

// Teacher.prototype.greeting = function(){
// 	var prefix;

// 	if(this.gender =="male" || this.gender == "Male" || this.gender =="m"){
// 		prefix = "Mr.";
// 	}
// 	else{
// 		prefix = "Ms."
// 	}
// 	alert("Hello "+prefix+" "+this.firstName+" "+this.lastName+". Welcome to "+this.university+". You will teach "+this.subject);
// }
// var Sanja = new Teacher("Magdi", "Ruzna", "f", "KiM", "Ecomonics");
// Sanja.greeting();
// __________________________________________________________________________________________________________________________________

// Class - klasi! se kreiraaat sekogas so golema bukva

// class Person{
// 	constructor(firstName, lastName){
// 		this.name = firstName;
// 		this.lastName = lastName;
// 	}
// 	greetin(){

// 	}
// } 

//Primer class.1 

// class User{
// 	constructor(name){
// 		this.name = name;
// 	}
// 	sayHi(){
// 		alert("Hello "+ this.name);
// 	}
// }

// var a = new User("Sanja");
// console.log(a.name);
// a.sayHi();

//Primer class.2 

// class Rectangle{
// 	constructor(w, h){
// 		this.width = w;
// 		this.height = h;
// 	}

// 	calcArea(){
// 		return this.width*this.height;	

// 	}

// 	area(){
// 		return this.calcArea();
// 	}

// }
// var rectangle = new Rectangle(10,10);
// console.log(rectangle.area());

// Primer class.3

// class SimpleDate{
// 	constructor(day, month, year){
// 		this.day = day;
// 		this.month = month;
// 		this.year = year;
// 	}
// 	addDays(nDays){
// 		return this.day += nDays;
// 	}

// }

// var today = new SimpleDate(19,07,2018);
// today.addDays(5);
// console.log(today);

// Nasledvanje svojstva od edna class na dr.class

class Teacher{
	constructor(firstName, lastName, subject){
	    this.firstName = firstName;
	    this.lastName = lastName;
	    this.subject = subject;
	}
}	

// 'extends' da kreira nova class koja nasleduva od prethodna class

class UniTeacher extends Teacher{

// 'super' da definira koi plus svojstva!

	constructor(firstName, lastName, subject, university,gender){
		super(firstName, lastName, subject);
		this.university = university;
		this.gender = gender;
	}
	greeting(){
		alert("Hello" + this.firstName+" "+this.lastName+". i will be teaching at"+this.university);
	}
}

var teacher = new UniTeacher("Magdi", "Ruzna", "Javascript", "SEMOS", "f");3
teacher.greeting();