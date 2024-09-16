//Part 2:
function csv(String) {
    let cell = '';
    let row = [];

    for (let i = 0; i < String.length; i++) {
         console.log = String[i];

        if (console.log === ',') {
         
            row.push(cell);
            cell = ''; 
        } else if (console.log === '\n') {
        
            row.push(cell);
            console.log(...row); 
            row = []; 
            cell = ''; 
        } else {
            
            cell += console.log;
        }
    }

    
    if (cell) {
        row.push(cell);
        console.log(...row);
    }
}


let Data1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";
csv(Data1);


let Data2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
csv(Data2);


// Part 3:
function dataTransform(startData) {
let newArray = [];
let headings = [];
    startData.forEach(el,i) ; {
        if(i == 0){
            el.forEach(el => {
                el = el.toLowerCase();
                headings.push(el)
            })
        } else {
            console.log(el)
        }
    }
       console.log(el) ; 
    
       

    return newArray; 
}
{let personArray "42", "Bruce", "Knight", "41"
let headings = ["ID", "Name", "Occupation", "Age"]
}
function makeObject(headings, personArray) {
let newPerson = {};

for (let i in headings){
    newPerson[headings[i]] = personArray[i]
}
let result = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctors Assistant", "26"]
];
}
//Part 4:
{const newArray = startData(Array);
console.log(Array);
}

let newArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctors Assistant", age: "26" }
];


newArray.pop();

newArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });


newArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });


console.log(newArray);


let totalAge = 0;

for (Object.newArray) {
    totalAge += parseInt(obj.age, 10);
}


let averageAge = totalAge / newArray.length;


console.log('Average Age:', averageAge);


// Part 5:
function startData(newArray) {
 
    if (newArray.length === 0) {
        return '';
    }

   
}


let Array = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];


let array
console.log();