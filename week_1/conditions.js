console.log("----------------------------------")
console.log(" ***** SIMPLE CALCULATOR ****** ")
console.log("----------------------------------")

//! ODEV1: Dort Islem Hesap Makinasi (2 Sayi bir operator, if-elseif)

const n1= +prompt("bir sayi girniz")
const n2= +prompt("bir sayi daha gir be reizz")
let operator= prompt("bir islem giriniz:+-*/")

let sonuc= 0

if (operator ==="+") {
    sonuc = n1+n2
}else if(operator ==="-"){
sonuc = n1-n2
}
else if(operator ==="*"){sonuc = n1*n2}


else if(operator ==="/"){sonuc = n1/n2}
else{ 
console.log(" yanlis islem girisi");
operator=null}
if(operator){
    console.log(`${n1} ${operator} ${n2} = ${sonuc}`);

}


