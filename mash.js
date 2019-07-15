function mash(){
    let phrase = ("you will live in a " + getHome() + ",and you will have " + getChildrenCount() + " kids");
    return phrase ;
}
console.log(mash())

function getHome(){
    let home = ['Mansion','Apartment', 'Shack', 'House'];
     let userHome = process.argv[2];
     home.push(userHome);
    let index = Math.floor(Math.random()* home.length);
    return home[index];
}
console.log(getHome())


 function getChildrenCount(){
     let number = Math.floor(Math.random()*100);
     return number;
 }
 

