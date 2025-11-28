const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");

document.getElementById("input1").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.-]/g, "");
});
document.getElementById("input2").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.-]/g, "");
});

function calculator(operation) {
    result.className = "";

    if (input1.value === "" || input2.value === "") {
        result.innerHTML = "Dữ kiện không đủ";
        return;
    }

    let numb1 = parseFloat(input1.value);
    let numb2 = parseFloat(input2.value);
    if (isNaN(numb1) || isNaN(numb2)) {
        result.innerHTML = "Lỗi dữ liệu";
        return;
    }

    let output;

    switch (operation) {
        case "getAdd":
            output = numb1 + numb2;
            break;
        case "getSub":
            output = numb1 - numb2;
            break;
        case "getMul":
            output = numb1 * numb2;
            break;
        case "getDiv":
            if (numb2 === 0) {
                output = "Không chia được cho 0";
                break;
            } else {
                output = numb1 / numb2;
                break;
            }
    }
    result.innerHTML = output;
}
document
    .getElementById("getAdd")
    .addEventListener("click", () => calculator("getAdd"));
document
    .getElementById("getSub")
    .addEventListener("click", () => calculator("getSub"));
document
    .getElementById("getMul")
    .addEventListener("click", () => calculator("getMul"));
document
    .getElementById("getDiv")
    .addEventListener("click", () => calculator("getDiv"));
