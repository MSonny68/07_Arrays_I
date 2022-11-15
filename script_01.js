"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: ARRAY */

// let arr;
// arr = [2,3,4,5];
// arr = [false,true,false];
// arr = ["Ich","bin","Maik","Sonny"];
// output(arr);
// output(arr.length);
// output(arr[3]);
// output(arr[arr.length-1]);

/*** 02a. Theorie: Schleifen (for Schleife) */
// for (let i = 0; i < 4; i++) {
//     output("Index i:" + i);
    
// }

/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/



/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1;  // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1;  // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1;  // a = 2 + 1
// output("inhalt von a: " + a);

/* Besser: mit For-Schleife */
// let a = 0;
// for (let i = 0; i < 10; i++) {
//     output("im Loop:" +a);
//     a +=1;
    
// }
// output("nach Loop: " + a);

/*** 02b. Funktionalität mit arrays 2 mit For-Schleife*/

let arr = ["Ich","bin","der","coole", "Maik","Sonny"]
//getSentenceArr2(arr);
output(getSentenceArr2(arr));

function getSentenceArr2(arr) {
    const GAP = " ";
    const PUNCT = ".";

    let str = "";
    for (let i = 0; i < arr.length; i++) {
        //output(arr[i]);
        str = str + arr[i] + GAP;
        
    }
    str = str.trim();
    str = str + PUNCT;

    return str;
}



/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."

//output(getSentence("Ich","bin","Maik","Sonny")); 
//output(getSentence("Ich","bin","der","coole", "Maik","Sonny")); 
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP + 
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 +
                PUNCT;


    return str;
}

/*** 01a. Funktionalität mit arrays 1*/
// Kritik | Überlegung
// word1,word2... :: Semantische Struktur
// arr[0],arr[1],... :: Numerische Struktur
// --> Transformation semantisches Problem --> numerisches Problem

//output(getSentenceArr(["Ich","bin","der","coole", "Maik","Sonny"]))
function getSentenceArr(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   arr[0] + GAP + 
                arr[1] + GAP +
                arr[2] + GAP +
                arr[3] + GAP +
                arr[4] + GAP +
                arr[5] +
                PUNCT;

    return str;
}







// Modul: Ausgabe in Konsole : Test
 
function output(outputStr) {
    console.log(outputStr);
}


