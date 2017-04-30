class Calculator {
    constructor(kihinimi, kastitekst, nuputekst, koefitsient) {
        this.kiht = document.getElementById(kihinimi);
        window[kihinimi + "_kalkulaator"] = this;
        
        this.kiht.innerHTML =
            kastitekst + ": <input type='text' id='" + kihinimi + "_kast' /> " +
            "<input type='button' value='" + nuputekst + "' onClick='" +
            kihinimi + "_kalkulaator.calculate();' /> " +
            "<span id='" + kihinimi + "_vastus'></span>";
        
        this.kast = document.getElementById(kihinimi + "_kast");
        this.vastusekiht = document.getElementById(kihinimi + "_vastus");
        
        this.koefitsient = koefitsient;
    }

    calculate() {
        this.vastusekiht.innerHTML = parseFloat(this.kast.value) * this.koefitsient;
    }
}