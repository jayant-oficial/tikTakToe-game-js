let heading  = document.querySelector(".heading");


heading.innerText = "Tik Tak Toe";

let boxes = document.querySelectorAll(".box");

let reset = document.querySelector(".reset");
let btnclick = true;

let count = 0;
let win = document.querySelector(".winner");
let winningList = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(btnclick){
            box.innerText="X";
            btnclick=false;
            count++;

        }else{
            box.innerText="O";
            btnclick=true;
            count++;
        }
        box.disabled = true;
        checkWinner();
        if(count==9){
            alert("game ended click reset to play another game")
        }
    })
});

const checkWinner=()=>{
    for(let list of winningList){
        let val1 = boxes[list[0]].innerText;
        let val2 = boxes[list[1]].innerText;
        let val3 = boxes[list[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1 == val2 && val2 == val3){
                console.log("winner",val1);
                win.style.visibility = "visible";
                win.innerText = `You won ${val1} 
                click reset to play another game`;
                boxes.forEach((box)=>{
                    box.disabled = true;
                })
            }
        }
    }
}

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText= "";
        box.disabled = false;
    })
    btnclick = true;
    clickReset = true;
    count = 0;
    win.style.visibility = "hidden";
});







