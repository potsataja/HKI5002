// Kalkulaator - sisestatud arvude aritmeetiline keskmine

class Calculator {
    constructor(kihinimi) {
        this.kiht = document.getElementById(kihinimi);
        window[kihinimi + "_kalkulaator"] = this;

        this.kiht.innerHTML =
            "Tekstikastide arv: <input type='number' id='" + kihinimi + "_kastideArv' " +
            "min='1' max='10' value='2'> " +
            "<input type='button' value='Genereeri kastid' " +
            "onclick='" + kihinimi + "_kalkulaator.generateBoxes();'>" +
            "<span id='" + kihinimi + "_kastid'></span>" +
            "<span id='" + kihinimi + "_vastus'></span>";

        this.kastideArv = document.getElementById(kihinimi + "_kastideArv");
        this.kastidekiht = document.getElementById(kihinimi + "_kastid");
        this.vastusekiht = document.getElementById(kihinimi + "_vastus");
        this.kihinimi = kihinimi;
    }

    calculate() {
        // Arvuta kastidesse sisestatud arvude aritmeetiline keskmine
        var arv = this.kastideArv.value;
        var sum = 0;
        for (var i = 1; i <= arv; i++) {
            sum += parseInt(document.getElementById(this.kihinimi + "_kast" + i).value);
        }
        this.vastusekiht.innerHTML = "<br><br>Sisestatud arvude aritmeetiline keskmine: " + sum/arv;//parseFloat(this.kast.value);
    }

    generateBoxes() {
        //console.log(this.kastideArv.value);
        // Genereeri soovitud arv kaste
        var arv = this.kastideArv.value;
        this.kastidekiht.innerHTML = "<hr>";
        for (var i = 1; i <= arv; i++) {
            this.kastidekiht.innerHTML += "Arv " + i + ": <input type='number' " +
            "id='" + this.kihinimi + "_kast" + i + "'><br>";
        }

        this.kastidekiht.innerHTML +=
            "<br><input type='button' value='Arvuta keskmine' " +
            "onclick='" + this.kihinimi + "_kalkulaator.calculate();'>";
        
        this.vastusekiht.innerHTML = "";
    }
}