// -------Chap 21-25-------

// ques1

// var first=prompt("Enter your First Name")
// var last=prompt("Enter your Last Name")

// var fullName=first + " " + last

// alert("Nice to see you "+fullName)

// ques2
// var mob=prompt("What's your favourite Mobile Phone");

// document.write("Your favourite mobile Mobile Phone is "+mob);
// document.write("</br>Length of string is : "+mob.length);

// ques3
// var coun="Pakistani";

// document.write("String :"+coun +"</br>Index of 'n' is "+coun.indexOf("n"));

// ques4
// var str="Hello World";

// document.write("String :"+str +"</br>Index of 'n' is "+str.lastIndexOf("l"));

// ques5

// var coun="Pakistani";

// document.write("String :"+coun +"</br>Index of 'n' is "+coun.charAt(3));

// ques6
// var first=prompt("Enter your First Name")
// var last=prompt("Enter your Last Name");;

// alert("Nice to see you "+first.concat(last));

// ques7
// var c="Hyderabad"

// document.write("City :"+c+"</br> After replacement : "+c.replace("Hyder","Islam"));

// ques8
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// document.write("String : "+message+"</br>After replacement : "+message.replace(/and/g,"&"));


// ques9
//  var string="472";
//  document.write("Value : "+string+"</br>Type : String</br>Value : "+Number(string)+"</br>Type : Number");


// ques10
// var string=prompt("Enter any string")

// document.write("User Input : "+string+"</br>Upper case : "+string.toUpperCase())


// ques11
// var userData=prompt("Enter any String");

// var firstChar=userData.slice(0,1).toUpperCase();
// var newData=firstChar+userData.slice(1).toLowerCase();
// alert(newData);


// ques12

// var num = 35.36 ;
// var n=num.toString().replace(".","");
// document.write("Number : "+num+"</br> Result : "+n);

// ques13

// var userName=prompt("Enter your Name")

// for(var i=0;i<userName.length;i++){

//     if(userName[i]=='@' || userName[i]=='!' || userName[i]==',' || userName[i]=='.'){

//         alert("Enter valid name")
//         break;
//     }
//     else{
//         alert("Hi! "+userName)
//     }
//     break;
// }

// ques14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var search=prompt("Welcome to ABC bakery, what do you want to Order.");

// var a=search.toLowerCase();

// for ( var j=0;j<1;j++){
//     for(var i=0 ; i<A.length ; i++){

//         if(A[i]===a){

//         alert(search+" is available in our bakery at index "+i); 
//         var find="yes";
//     } 
//   }
  
//   if(find=="yes"){
//       break;
//   }
//   else{
//     alert("Sorry "+search+" is not available"); 
//   }
// }

// ques15
// var pas=prompt("Enter your Pasword")
// var number=/[0-9]/;
// var alphabet=/[a-zA-Z]/;

// if(pas.charAt(0)>=1 || pas.charAt(0)<=9){

//     alert("Sorry! Password cannot begin with a number </br> Please, Enter a valid Password")
// }

// if((pas.match(alphabet))){
    
//     var alpha=1;
// } 
// else {
//     alert("Your password should contain atleast 1 alphabet</br> Please, Enter a valid Password")
// }

// if((pas.match(number))){
    
//     var num=1;
// } 
// else {
//     alert("Your password should contain atleast 1 number </br> Please, Enter a valid Password")
// }

// if(num==1 && alpha==1 && pas.length<6){

//     alert("Password length Must be greater than 6 </br> Please, Enter a valid Password")
// }

// else if(num==1 && alpha==1 && pas.length>=6){

//     alert("Congrats! Your password meet all requirements.")
// }


// ques16
// var university="University of Karachi";

// var arr=university.split('');
// document.write(arr);

// ques17
// var word=prompt("Enter any word");

// var lastChar=word.charAt(word.length-1);
// alert("Last char of array =>"+lastChar);

// ques18

// var str="The quick brown fox jumps over the lazy dog";
// var a=0;
// s=str.toLowerCase();
// for(var i=0; i<str.length;i++){

//     if(s.slice(i,i+3)=="the")
//     var a=a+1
// }

// document.write("Text : "+str+"</br>There are "+a+" Occuranes of the word 'the' .")



// ---------chap 26-30--------

// ques1
// var num=+prompt("Enter positive integer");

// document.write("Number : "+num);
// document.write("</br>Round off value : "+Math.round(num));
// document.write("</br>Floor value : "+Math.floor(num));
// document.write("</br>Ceil value : "+Math.ceil(num));

// ques2
// var int=+prompt("Enter negative Integer");

// document.write("Number : "+int);
// document.write("</br>Round off value : "+Math.round(int));
// document.write("</br>Floor value : "+Math.floor(int));
// document.write("</br>Ceil value : "+Math.ceil(int));


// ques3
// var num=+prompt("Enter any Integer");

// document.write("Number : "+num);
// document.write("</br>Absolute value : "+Math.abs(num));

// ques4
// var a=Math.round((Math.random()*5)+1);
// document.write("Random dice value : "+a);

// ques5
// var a=Math.round((Math.random()*1)+1);

// if(a==2){
//     document.write(a+" ==>Heads");
// }
// else if(a==1){
//     document.write(a+" ==>Tails");
// }

// ques6
// var random=Math.round((Math.random()*99)+1);
// document.write("Random number between 1 and 100  : "+random);


// ques7
// var weight=prompt("Enter your weigth");
// var weight=parseInt(weight);
// alert(weight+" Kilograms");

// ques8
// var a=Math.round((Math.random()*9)+1);

// var guess=prompt("Guess the secret number from 1-10")

// if(a==guess){

//     alert("Congrats! you guessed the correct number")
// }
// else(

//     alert("Try again!")
// )

