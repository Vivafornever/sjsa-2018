// Zadaca 1. Funkcija 'suma od zadadeni broevi'

// function sum(a, b){
// 	return a + b;
// }

// console.log(sum(2, 5));

// console.log(sum(7,10));

// console.log(sum(100, 1000));

// _________________________________________________

// Zadaca 2. Da forsirame promenliva vo odreden podatocen tip 

// var first_number = parseInt(prompt("Enter number"));
// var second_num = parseInt(prompt("Enter second number"));


// // console.log(first_number);

// function compare(num1 , num2){
// 	var result ;
// 	if(num1> num2){
// 		result=num1+ " is bigger than " +num2;
// 	}
// 	else if(num1< num2){
// 		result=num2+ " is bigger than " +num1;
// 	}else{
// 		result=num1+ " and "+num2 +" are equal";
// 	}
// 	return result;
// }

// console.log(compare(first_number,second_num));

// ______________________________________________________

//Zadaca 3: Da vrakja funkcija kako Greeting, a da pecati Hello + Ime 

// *moze da se pise direktno ime vo Console.log , bez dodeluvanje vrednost na Var

// var name = ("Sanja");

// function greeting(name){
// 	return name;
// }

// console.log("Hello" , name);

// _______________________________________________________


//Zadaca 4: Funkcija vo koja ke proveruva dali nekoj broj e paren ili ne 
            // i ako e paren da vrati True ili False, 
            // i ako e neparen da vrati False...

// function test(a){
// 	if(a%2==0){
// 		return true;
// 	}
// 	else
// 		return false;
// }

// console.log(test(7));


// if(test(4)==true){
// 	console.log("Brojot e paren");
// }
// else{
// 	console.log("Brojot e neparen");
// // }

// ____________________________________________________________

// //Zadaca 5: Da pretvorime C to F!! funkcija so dva parametri....

// function temp(degrees, conversionType){
// 	if(conversionType == "c2f"){
// 		console.log(degrees+ " from celsius to fahrenheit is "+(degrees *(9/5)+32));
// 	}else if(conversionType == "f2c"){
// 		console.log(degrees+ " from f to c is " +((degrees-32) *5/9));
// 	}
// 	else{
// 		console.log("Unknown type of conversion");
// 	}
// }
// temp(120, "f2c");

// _____________________________________________________________

//Zadaca 6: Funkcija da broi kolku pati nesto(odreden karakter) se povtoruva vo odreden string! --charAt e ustvari karakter koj se proveruva vo zadadenata niza
   
    //6.1

// function count(str, char){
// 	var c = 0;
// 	for(var i = 0; i<str.length; i++){
// 		if(str.charAt(i)== char){
// 			c++;
// 		}
// 	}
// 	return c;
// }
// console.log(count("ABCDEFUUUGHABCDEFGH","U"));

//6.2  ako sakame da proverime vo nizata na koi se pozicii se povtoruva karaktetot! zadavame prazna niza i so push go dodavame elementot vo praznata niza....

//     var niza = []
// function count(str, char){
// 	var c = 0;


// 	for(var i = 0; i<str.length; i++){
// 		if(str.charAt(i)== char){
// 			c++;
// 			niza.push(i);
// 		}
// 	}
// 	return c;
// }
// console.log(count("ABCDEFUUUGHABCDEFGH","U"));
// console.log(niza);

// _______________________________________________________________

// definiranje na vreme koga da se pojavi nesto!

// setTimeout(function(){
// 	alert("Hello World");
// }, 5000);

// // definiranje na interaval koga da se povtoruvaat odredeni akcii!

// setInterval(function(){
// 	alert("Magdi");
// },2000);
	
// _________________________________________________________________

// var bomb = setInterval(function(){
// 	console.log("BOMB");
// }, 3000);

// setTimeout(function(){
// 	clearInterval(bomb);
// 	alert("Bomb defused");
// }, 10000);
// _______________________________________________________________________