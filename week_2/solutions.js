console.log("----------------------------------")
console.log(" ***** week schedule ****** ")
console.log("----------------------------------")

//! ODEV2:Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

const day = prompt("Please select a day: ").toLocaleLowerCase()

switch (day) {
    case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            console.log("InClass");
        break;
        case "friday":
            console.log("Teamwork");
            break;
            case "saturday":
                console.log("InClass + Workshop");
            case "sunday":
                console.log("restday");
    default:
        console.log("incorrect day");
        break;
}


