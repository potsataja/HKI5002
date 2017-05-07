class Laohaldus {
    constructor(kihinimi, kogus, intervall) {
        this.kiht = document.getElementById(kihinimi);
        this.kogus = kogus;
        window[kihinimi + "_ladu"] = this;
        
        this.kiht.innerHTML =
            "<canvas id='" + kihinimi + "_joonis' " +
            "width='300' height='150' " +
            "style='background-color: yellow' ></canvas><br />" +
            "<input type='button' value='&lt;' "
            + " onClick='" + kihinimi + "_ladu.v2iksemaks();' /> " +
            "<input type='text' id='" + kihinimi + "_vastus'" +
            "style='width: 50px' disabled />" +
            "<input type='button' value='&gt;' "
            + " onClick='" + kihinimi + "_ladu.suuremaks();' /> " + 
            " &nbsp;&nbsp; intervall: <input type='number' id='" + kihinimi + "_intervall' value='" +
            intervall + "' style='width: 50px' />";
        
        this.vastusekiht = document.getElementById(kihinimi + "_vastus");
        this.joonis = document.getElementById(kihinimi + "_joonis");
        this.kihinimi = kihinimi;
        
        this.kuva();
    }

    kuva(){
        this.vastusekiht.value = this.kogus;
        var g = this.joonis.getContext("2d");
        g.clearRect(0, 0, 300, 150);
        g.fillRect(10, 10, this.kogus, 20);
    }

    v2iksemaks(){
        this.kogus -= parseInt(document.getElementById(this.kihinimi + "_intervall").value);
        this.kuva();
    }

    suuremaks(){
        this.kogus += parseInt(document.getElementById(this.kihinimi + "_intervall").value);
        this.kuva();
    }
}

/*function Laohaldus(kihinimi, kogus) {
    this.algus = function () {
        this.kiht = document.getElementById(kihinimi);
        this.kogus = kogus;
        window[kihinimi + "_ladu"] = this;
        this.kiht.innerHTML =
            "<canvas id='" + kihinimi + "_joonis' " +
            "width='200' height='150' " +
            "style='background-color: yellow' ></canvas><br />" +
            "<input type='button' value='&lt;' "
            + " onClick='" + kihinimi + "_ladu.v2iksemaks();' /> " +
            "<input type='text' id='" + kihinimi + "_vastus'" +
            "style='width: 50px' disabled />" +
            "<input type='button' value='&gt;' "
            + " onClick='" + kihinimi + "_ladu.suuremaks();' /> ";
        this.vastusekiht = document.getElementById(kihinimi + "_vastus");
        this.joonis = document.getElementById(kihinimi + "_joonis");
        this.kuva();
    }
    this.kuva = function () {
        this.vastusekiht.value = this.kogus;
        var g = this.joonis.getContext("2d");
        g.clearRect(0, 0, 200, 150);
        g.fillRect(10, 10, this.kogus, 20);
    }
    this.v2iksemaks = function () {
        this.kogus--;
        this.kuva();
    }
    this.suuremaks = function () {
        this.kogus++;
        this.kuva();
    }
    this.algus();
}*/
