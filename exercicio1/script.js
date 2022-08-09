const num = Number(prompt("Digite seu número:"))

//1
/*if(num%2===0){
    if(num%3===0){
        console.log("Esse número é divisível por 2 e 3.");
    }
}else{
    console.log("Esse número não é divisível por 2 e 3.");
}*/

//2
if(num%2===0 || num%3===0){
    console.log("Esse número é divisível por 2 e 3.");
}else{
    console.log("Esse número não é divisível por 2 e 3.");
}
