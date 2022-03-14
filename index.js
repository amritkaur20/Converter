
const inputE = document.getElementById("E1");
const button = document.getElementById("change");
const outPut = document.getElementById("heading");

const source = document.getElementById("source");
const local = document.getElementById("local");

const opt1 = document.getElementById("1");
const opt2 = document.getElementById("2");
const opt3 = document.getElementById("3");
const opt4 = document.getElementById("4");

const option1 = document.getElementById("opt1");
const option2 = document.getElementById("opt2");
const option3 = document.getElementById("opt3");
const option4 = document.getElementById("opt4");


button.addEventListener("click",(e)=>{
    e.preventDefault();
    if(source.value == local.value){
        alert("Both are same selection please choose a different selection");
    }
    else if(!inputE.value){
        alert("input is unavailable");
    }
    else if(source.value == "dec" && local.value == "hex"){
        let number = parseInt(inputE.value);
        let str = number.toString(16);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "dec" && local.value == "oct"){
        let number = parseInt(inputE.value);
        let str = number.toString(8);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "dec" && local.value == "bin"){
        let number = parseInt(inputE.value);
        let str = number.toString(2);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "hex" && local.value == "dec"){
        let number = inputE.value ;
        let str = parseInt(number,16);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "hex" && local.value == "oct"){
        let number = inputE.value ;
        let str = parseInt(number,16).toString(8);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "hex" && local.value == "bin"){
        let number = inputE.value ;
        let str = (parseInt(number,16).toString(2)).padStart(8,'0');
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "oct" && local.value == "dec"){
        let number = inputE.value ;
        let str = parseInt(number,8).toString(10);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "oct" && local.value == "hex"){
        let number = inputE.value ;
        let str = parseInt(number,8).toString(16);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "oct" && local.value == "bin"){
        let number = inputE.value ;
        let str = parseInt(number,8).toString(2);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "bin" && local.value == "dec"){
        let number = parseInt(inputE.value) ;
        let str = parseInt(number,2).toString(10);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "bin" && local.value == "hex"){
        let number = parseInt(inputE.value) ;
        let str = parseInt(number,2).toString(16);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
    else if(source.value == "bin" && local.value == "oct"){
        let number = parseInt(inputE.value) ;
        let str = parseInt(number,2).toString(8);
        outPut.innerText = "value is =>" + str;
        outPut.style.color = "yellow";
    }
})

const swapt = document.getElementById("swap");
swapt.addEventListener("click" ,(e)=>{
    e.preventDefault();
    let v = local.value;
    let b = source.value;
    source.value = v;
    local.value = b;
})

