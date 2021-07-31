// variables

let calculator = {
    tipPerPerson: 0.00,
    totalPerPerson: 0.00,
    bill: "",
    numOfPeople: "",
    tip: 0,
    reset: function () {
        this.state = "off",
            this.tipPerPerson = 0.00,
            this.totalPerPerson = 0.00,
            this.bill = "",
            this.numOfPeople = ""

    },
    cal: function () {
        this.tipPerPerson = ((this.tip * this.bill) / 100) / this.numOfPeople;
        this.totalPerPerson = this.tipPerPerson + (this.bill / this.numOfPeople);
    }
}


let bill = document.getElementById('bill-js');

let custom_tip = document.getElementById("custom_tip-js");

let numOfPeople = document.getElementById("num-js");

let tip_out = document.getElementById("tip_out-js");

let total_out = document.getElementById("total_out-js");

let reset_btn = document.getElementById("reset_btn-js");

let tips = document.getElementById("tips-js");

//fun

let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);


let update = () => {
    bill.value = calculator.bill;
    numOfPeople.value = calculator.numOfPeople;
    tip_out.innerText = `$${calculator.tipPerPerson.toFixed(2)}`;
    total_out.innerText = `$${calculator.totalPerPerson.toFixed(2)}`;
}

update();

let main = () => {
    calculator.bill = parseFloat(bill.value);
    calculator.numOfPeople = parseFloat(numOfPeople.value);
    calculator.cal();
    update();
    remove(reset_btn, "reset");
}

// event listners

tips.addEventListener("click", (e) => {
    if (check(e.target, "tip_item-i")) {
        calculator.tip = parseFloat(e.target.innerText.slice(0, -1));
        main();
    }

})

custom_tip.addEventListener("change", (e) => {
    if (check(e.target, "tip_item-input")) {
        calculator.tip = parseFloat(e.target.value);
        main();
    }

})

reset_btn.addEventListener("click", () => {
    calculator.reset();
    update();
    add(reset_btn, "reset");
})

