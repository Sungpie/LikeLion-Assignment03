window.onload = num();
window.onload = operator();
window.onload = equal();
window.onload = reset();

let flag_cal = false; // 연산 기호와 관련된 플래그, 연산 기호를 연속적으로 입력하지 못하게 구현
let flag_fill = false; // 화면에 값이 있는지 없는지에 대한 플래그, 화면에 값이 없을 경우 연산 기호 입력 불가능하게 구현
let flag_reInput = false; // 재입력과 관련된 플래그, 등호 버튼을 누르고 난 후, 숫자를 입력하면 기존의 값이 지워지고 새로운 입력값이 출력되도록 구현

// 숫자를 눌렀을 때 반응하는 함수 -> 화면에 해당 숫자 출력
function num() {
    const num = document.querySelectorAll(".cal-box_button");
    num.forEach((item, index) => {
        item.addEventListener('click', function() {
            if(flag_reInput == true) {
                document.querySelector(".cal-box_result").innerText = "";
                document.querySelector(".cal-box_result").innerText += item.innerText;
            } else {
                document.querySelector(".cal-box_result").innerText += item.innerText;
            }
            flag_fill = true;
            flag_reInput = false;
        })
    })
}

// 연산 기호를 눌렀을 때 반응하는 함수 -> 화면에 해당 기호 출력
function operator() {
    const operator = document.querySelectorAll(".cal-box_operator");
    operator.forEach((item, index) => {
        item.addEventListener('click', function() {
            if(flag_cal == false && flag_fill == true) {  
                // 화면에 어떠한 값도 존재하지 않을 경우 연산 기호 입력 X
                // 연산 기호를 이미 한 번 입력했으면 더 이상 기호 입력 X

                document.querySelector(".cal-box_result").innerText += item.innerText;
                flag_cal = true;
                flag_reInput = false;
            }
            

        })
    })
}


// 등호를 눌렀을 때 반응하는 함수 -> 화면에 띄워진 값을 계산한 후 출력
function equal() {
    document.querySelector(".cal-box_equal").addEventListener('click', function() {
        document.querySelector(".cal-box_result").innerText = eval(document.querySelector(".cal-box_result").innerText);
        flag_cal = false;
        flag_reInput = true;
    })
}

// AC 버튼을 눌렀을 때 화면에 있는 값을 지우는 함수
function reset() {
    document.querySelector(".cal-box_reset").addEventListener('click', function() {
        document.querySelector(".cal-box_result").innerText = "";
        flag_cal = false;
        flag_fill = false;
        flag_reInput = false;
    })
}
