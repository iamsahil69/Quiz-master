var ques = document.querySelector(".ques");
var options = document.querySelectorAll(".option");
var btn = document.querySelector(".btn");
var subBtn = document.querySelector(".submitBtn");
var infoBox = document.querySelector(".info");
var detailsBtn = document.querySelector(".info button");
var rulesBox = document.querySelector(".rules");
var resultBox = document.querySelector(".result-box");
var quesBox = document.querySelector(".ques-box");
var spans = document.querySelectorAll(".result-box span");
var startBtn = document.querySelector(".start");
var resultH2 = document.querySelector(".result-box h2");
var quesH2 = document.querySelector(".ques-box h2");
var msg = document.querySelector(".msg");

var answers = [];
var actualAnswers = [];
var score = 0;
var unansweredQuestions = 0;
var index = 1;
var wrong = 0;
var categoryIndex = 0;
var category = [ "Computer Sci.", "Mathematics", "Science", "General Knowledge"];
var user = {
    name : "",
    email : "",
    categoryName : "",
    score : 0,
    unanswered : 0,
    wrong : 0
};
var questions = [
[
{
    quest : "Who invented java ?",
    opt1 : "James Gosling",
    opt2 : "Adam Richie",
    opt3 : "Denis Richie",
    opt4 : "John Stroustrup",
     correctAns : 1
},
{
    quest : "What language does not support constructors ?",
    opt1 : "C++",
    opt2 : "Kotlin",
    opt3 : "C",
    opt4 : "Java",
     correctAns : 3
},
{
    quest : "What is full form of HTML ?",
    opt1 : "Hyper Text Markup Language",
    opt2 : "Hyper Transfer Markup Language",
    opt3 : "High Text Markup Language",
    opt4 : "Hyper Transport Markup Language",
     correctAns : 1
},
{
    quest : "Which software is used for version controlling ?",
    opt1 : "Github",
    opt2 : "Git",
    opt3 : "Quora",
    opt4 : "Slack",
     correctAns : 2
},
{
    quest : "Which of them is not a OOP language ?",
    opt1 : "Java",
    opt2 : "Python",
    opt3 : "C",
    opt4 : "C++",
     correctAns : 3
},
{
    quest : "Which programming language is used in flutter ?",
    opt1 : "Python",
    opt2 : "Dart",
    opt3 : "Kotlin",
    opt4 : "C#",
     correctAns : 2
},
{
    quest : "Which of the following which is not a code editor ?",
    opt1 : "Atom",
    opt2 : "Bracketts",
    opt3 : "Sublime Text",
    opt4 : "Django",
     correctAns : 4
},
{
    quest : "Which data structure is based on LIFO principle ?",
    opt1 : "Stack",
    opt2 : "Queue",
    opt3 : "LinkedList",
    opt4 : "Tree",
     correctAns : 1
},
{
    quest : "Which of the following is not an Operating System ?",
    opt1 : "Linux",
    opt2 : "Windows",
    opt3 : "Mac OS",
    opt4 : "Xamarin",
     correctAns : 4
},
    {
          quest : "Which of the following is a backend scripting language ?",
          opt1 : "Javascript",
          opt2 : "Python",
          opt3 : "C++",
          opt4 : "PHP",
          correctAns : 4
     },
],

[
{
    quest : "What is the square root of 9604 ?",
    opt1 : "96",
    opt2 : "92",
    opt3 : "98",
    opt4 : "94",
     correctAns : 3
},
{
    quest : "What is the cube of 23  ?",
    opt1 : "14467",
    opt2 : "14497",
    opt3 : "14460",
    opt4 : "14475",
     correctAns : 1
},
{
    quest : "What is the value β, if sin(β) = 1/2 where 0 < β < π/2 ?",
    opt1 : "π/6",
    opt2 : "π/4",
    opt3 : "π/3",
    opt4 : "2π/3",
     correctAns : 1
},
{
    quest : "What is the value of tan(π/3) ?",
    opt1 : "√3",
    opt2 : "1/√3",
    opt3 : "1",
    opt4 : "4",
     correctAns : 1
},
{
    quest : "What is the cube root of 1331 ?",
    opt1 : "9",
    opt2 : "12",
    opt3 : "11",
    opt4 : "21",
     correctAns : 3
},
{
    quest : "(x - 2)(x - 3) =  ?",
    opt1 : "x²+6x+2",
    opt2 : "x²-5x+6",
    opt3 : "x³+2x-6",
    opt4 : "x²+6",
     correctAns : 2
},
{
    quest : "What is the sum of squares of 5 and 6 ?",
    opt1 : "71",
    opt2 : "81",
    opt3 : "51",
    opt4 : "61",
     correctAns : 4
},
{
    quest : "If x²-16=0 then x =  ?",
    opt1 : "4 and 2",
    opt2 : "-4 and 0",
    opt3 : "4 and -4",
    opt4 : "None of the above",
     correctAns : 3
},
{
    quest : "if in a rt. angled Δ p = 6 cm, b = 8 cm then h =  ?",
    opt1 : "15 cm",
    opt2 : "10 cm",
    opt3 : "11 cm",
    opt4 : "12 cm",
     correctAns : 2
},
    {
          quest : "If ram sold a TV at Rs. 6400 which he had bought at Rs. 5000 then what his profit ?",
          opt1 : "Rs. 1400",
          opt2 : "Rs. 2500",
          opt3 : "Rs. 2400",
          opt4 : "Rs. 1300",
          correctAns : 1
     },
],

[
{
    quest : "What is the chemical name of common salt ?",
    opt1 : "Sodium Carbonate",
    opt2 : "Sodium Bicarbonate",
    opt3 : "Sodium Chloride",
    opt4 : "Sodium Sulphate",
     correctAns : 3
},
{
    quest : "The blanket of air around earth is called ?",
    opt1 : "Hydrosphere",
    opt2 : "Lithosphere",
    opt3 : "Biosphere",
    opt4 : "Atmosphere",
     correctAns : 4
},
{
    quest : "Global warming is increasing due to which gas ?",
    opt1 : "Carbon dioxide",
    opt2 : "Carbon trioxide",
    opt3 : "Ethane",
    opt4 : "Propane",
     correctAns : 1
},
{
    quest : "Acid turns blue litmus to ?",
    opt1 : "Black",
    opt2 : "Pink",
    opt3 : "Red",
    opt4 : "Yellow",
     correctAns : 3
},
{
    quest : "The process with the help of which plants make their food in presence of sunlight ?",
    opt1 : "Sublimation",
    opt2 : "Photosynthesis",
    opt3 : "Condensation",
    opt4 : "Evaporation",
     correctAns : 2
},
{
    quest : " HCl + NaOH ---> NaCl + β , what is β ?",
    opt1 : "Water",
    opt2 : "Sodium bicarbonate",
    opt3 : "Sodium carbonate",
    opt4 : "Ethanol",
     correctAns : 1
},
{
    quest : "Ethanol belongs to which family ?",
    opt1 : "Alkanes",
    opt2 : "Alkynes",
    opt3 : "Alcohol",
    opt4 : "Alkenes",
     correctAns : 3
},
{
    quest : "The process due to which water turns to vapours is called ?",
    opt1 : "Evaporation",
    opt2 : "Filtration",
    opt3 : "Condensarion",
    opt4 : "None of the above",
     correctAns : 1
},
{
    quest : "Which acronym represents seven colours of rainbow ?",
    opt1 : "VBGYORP",
    opt2 : "VIBGYOR",
    opt3 : "VIBGYOP",
    opt4 : "RVIBGYO",
     correctAns : 2
},
    {
          quest : "The pH of a Base will be ?",
          opt1 : "Above 7",
          opt2 : "Below 7",
          opt3 : "Equal to 7 ",
          opt4 : "none of the above",
          correctAns : 1
     },
],

[
{
    quest : "Who is the Prime Minister of India ?",
    opt1 : "Ramnath Kovind",
    opt2 : "N.D. Modi",
    opt3 : "Amit Shah",
    opt4 : "Rajnath Singh",
     correctAns : 2
},
{
    quest : "Book written by Mahatma Gandhi ?",
    opt1 : "Discovery of India",
    opt2 : "Train to Pakistan",
    opt3 : "My Experiment with truth",
    opt4 : "New India",
     correctAns : 3
},
{
    quest : "Which state in India is known as 'Land of five rivers' ?",
    opt1 : "Punjab",
    opt2 : "Bihar",
    opt3 : "Haryana",
    opt4 : "Uttar Pradesh",
     correctAns : 1
},
{
    quest : "Kaziranga National Park is situated in which state?",
    opt1 : "Andhra Pradesh",
    opt2 : "Uttrakhand",
    opt3 : "Punjab",
    opt4 : "Assam",
     correctAns : 4
},
{
    quest : "Last Emperor of Mughal Empire ?",
    opt1 : "Shah Jahan",
    opt2 : "Aurangzeb",
    opt3 : "Jahangir",
    opt4 : "Akbar",
     correctAns : 2
},
{
    quest : "Train to Pakistan is a book written by ? ",
    opt1 : "Mahatma Gandhi",
    opt2 : "Khushwant Singh",
    opt3 : "Rajnath",
    opt4 : "Ruskin bond",
     correctAns : 2
},
{
    quest : "Which of the following is not a state ?",
    opt1 : "Telangana",
    opt2 : "Andhra Pradesh",
    opt3 : "Jammu & Kashmir",
    opt4 : "Tripura",
     correctAns : 3
},
{
    quest : "Where is Jim corbett national park is situated ?",
    opt1 : "Uttrankhand",
    opt2 : "Kerela",
    opt3 : "Nagaland",
    opt4 : "None of the above",
     correctAns : 1
},
{
    quest : "Full form of FCI ?",
    opt1 : "Food Corporation of India",
    opt2 : "Food Committe of India",
    opt3 : "Forest Corporation of India",
    opt4 : "Federal Corporation of India",
     correctAns : 1
},
    {
          quest : "Who is the CM of Delhi?",
          opt1 : "Amit Shah",
          opt2 : "Amrinder Singh",
          opt3 : "Rajnath Singh ",
          opt4 : "Arvind Kejriwal",
          correctAns : 4
     },
],

];

detailsBtn.addEventListener( "click", (e) => {
var inputs = document.querySelectorAll("#detailsForm input");
var quesType = document.querySelector("#detailsForm select");

var name = inputs[0].value;
user.name = name;
var email = inputs[1].value;
user.email = email;
 categoryIndex = quesType.value;
user.categoryName = category[categoryIndex];

if( name === ""){
    alert("Please enter your name!");
}else{
     if(email === ""){
          alert("Please enter your email!");
     }else{
          if( categoryIndex === ""){
              alert("Please select category of questions!");
          }else{
                user.name = name;
                user.email = email;
                user.categoryName = category[categoryIndex];
                
                for( var j = 0; j < questions[categoryIndex].length ; j++){
                actualAnswers[j] = questions[categoryIndex][j].correctAns;
                }
                
                index = 0;
                ques.innerHTML = `Q${index+1}. ${questions[categoryIndex][index].quest}`;
                options[0].innerHTML = questions[categoryIndex][index].opt1;
                options[1].innerHTML = questions[categoryIndex][index].opt2;
                options[2].innerHTML = questions[categoryIndex][index].opt3;;
                options[3].innerHTML = questions[categoryIndex][index].opt4;;
                
                index++;
                infoBox.style.display = "none";
                quesH2.innerHTML = `${user.categoryName} Questions`
                rulesBox.style.display = "block";
          }
     }
}

});

btn.addEventListener( "click", (e) => {
var optns = document.querySelectorAll("#options input");


for( var i = 0; i < optns.length ; i++){
if(optns[i].checked){
     answers.push(i + 1);
     break;
}else if( i === 3){
     answers.push(0);
     unansweredQuestions++;
}

}

ques.innerHTML = `Q${index+1}. ${questions[categoryIndex][index].quest}`;
options[0].innerHTML = questions[categoryIndex][index].opt1;
options[1].innerHTML = questions[categoryIndex][index].opt2;
options[2].innerHTML = questions[categoryIndex][index].opt3;;
options[3].innerHTML = questions[categoryIndex][index].opt4;;

index = index + 1;
if( index ===10){
btn.style.display = "none";
subBtn.style.display = "inline-block";
}
// Resetting radio buttons
optns.forEach( (element) => {
     element.checked = false;

});
});

startBtn.addEventListener( "click", (e) => {
rulesBox.style.display = "none";
quesBox.style.display = "block";

});
subBtn.addEventListener( "click" , (e) => {

var optns = document.querySelectorAll("#options input");

for( var i = 0; i < optns.length ; i++){
if(optns[i].checked){
     answers.push(i + 1);
     break;
}else if( i === 3){
     answers.push(0);
     unansweredQuestions++;
}

}

for( var k = 0; k < actualAnswers.length ; k++){
     if(answers[k] === actualAnswers[k]){
       score++;
     }else{
       if(answers[k] === 0 ){
          // unansweredQuestions++;
       }else{
           wrong++;
       }
    }
}

user.score = score*2;
user.wrong = wrong;
user.unanswered = unansweredQuestions
resultH2.innerHTML = `Hi! ${user.name}, Here's your result`;
spans[0].innerHTML = `Name : ${user.name}`
spans[1].innerHTML = `Email Id : ${user.email}`
spans[2].innerHTML = `Unanswered Ques.  : ${user.unanswered}`
spans[3].innerHTML = `Wrong answered Ques.  : ${user.wrong}`
spans[4].innerHTML = `Correct answers : ${score}`
spans[5].innerHTML = `Your Score : ${user.score}`

if( score <= 3){
msg.innerHTML = "Nice try! Better luck next time.";
}else if( score > 3 && score <=7){
msg.innerHTML = "Well done, Keep it up!";
}else if( score > 7 && score < 10 ){
msg.innerHTML = "Good job ! You are almost there.!";
}else{
msg.innerHTML = "Congratulations ! You scored perfect 20.";
}
quesBox.style.display = "none";
resultBox.style.display = "block";

alert("Your quiz submitted successfully!");
} );

