var inputs = document.querySelectorAll("input");

var submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("Prazno polje");
            break;
        }
    }
});

