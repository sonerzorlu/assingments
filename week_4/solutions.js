console.log("----------------------------------");
console.log(" ***** credit risk calculations ****** ");
console.log("----------------------------------");

//!ODEV4: Kredi Risk Programı

//? Console’dan kişinin gelir ve gider miktarını alan
//? eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//? değilse Kredi Verilemez 🥺
//? şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const gelir = prompt("geliriniz ne kadar");
const gider = prompt("gideriniz ne kadar");
const asgar = 5500;
gelir - gider <= asgar
  ? console.log("kredi verilemez")
  : console.log("kredi yok");
