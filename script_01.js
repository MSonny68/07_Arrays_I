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

output(getSentenceArr(["Ich","bin","der","coole", "Maik","Sonny"]))
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


/*** 01b. Funktionalität mit arrays mit For-Schleife*/

output(getSentenceArr(["Ich","bin","der","coole", "Maik","Sonny"]))
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


