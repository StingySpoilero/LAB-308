//Part 1:
function csv(String) {
    let cell = '';
    let row = [];

    for (let i = 0; i < String.length; i++) {
        const char = String[i];

        if (char === ',') {
         
            row.push(cell);
            cell = ''; 
        } else if (char === '\n') {
        
            row.push(cell);
            console.log(...row); 
            row = []; 
            cell = ''; 
        } else {
            
            cell += char;
        }
    }

    
    if (cell) {
        row.push(cell);
        console.log(...row);
    }
}


const Data1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";
csv(Data1);


const Data2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
csv(Data2);


// Part 3:
function transformToObjects(dataArray) {
    const header = dataArray[0].map(header => header.toLowerCase()); 
    const objectArray = []; 

    for (let i = 1; i < dataArray.length; i++) { 
        const obj = {}; 
        for (let j = 0; j < header.length; j++) { 
            obj[header[j]] = dataArray[i][j]; 
        }
        objectArray.push(obj); 
    }

    return objectArray; 
}


const resultsArray = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctors Assistant", "26"]
];

//Part 4:
{const objectArray = transformToObjects(resultsArray);
console.log(objectArray);
}

let objectArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctors Assistant", age: "26" }
];


objectArray.pop();

objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });


objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });


console.log(objectArray);


let totalAge = 0;

for (const obj of objectArray) {
    totalAge += parseInt(obj.age, 10);
}


const averageAge = totalAge / objectArray.length;


console.log('Average Age:', averageAge);


// Part 5:
function transformToCSV(objectArray) {
 
    if (objectArray.length === 0) {
        return '';
    }

   
    const header = Object.keys(objectArray[0]).join(','); 

    
    const csvRows = objectArray.map(obj => {
        return Object.values(obj).join(','); 
    });

    
    return [header, ...csvRows].join('\n');
}


const finalArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];


const finalCSV = transformToCSV(finalArray);
console.log(finalCSV);