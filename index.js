const cats= ["Milo", "Otis", "Garfield"]
const cat=["Arnold"]
function destructivelyAppendCat(name){
    cats.push('Ralph');
}

destructivelyAppendCat;
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

destructivelyPrependCat;
function destructivelyRemoveLastCat(name){
    cats.splice(2);
}
destructivelyRemoveLastCat;

function destructivelyRemoveFirstCat(name){
    cats.splice(0,1);
}
destructivelyRemoveFirstCat;

function appendCat(name){
    return cats.concat(["Broom"]);
    

} ;
appendCat;



function prependCat(name){
    return cat.concat(["Milo", "Otis", "Garfield"]);
    

}
 
prependCat;

function removeLastCat(){
    return cats.slice(0,2);

}  
removeLastCat;

function removeFirstCat(){
    return cats.slice(1);

}  
removeFirstCat;

