class Lamp {
    constructor(kihinimi) {
        this.seisund = true;
        this.kiht = document.getElementById(kihinimi);
        window[kihinimi + "_lamp"] = this;

        this.kiht.innerHTML =
            "<p>" + kihinimi + ": <input type='button' value='Vaheta' " +
            " onClick='" + kihinimi + "_lamp.vahetaSeisund();' /><br/>"
            + "<canvas id='" + kihinimi + "_joonis' " +
            "width='100' height='70' " +
            "style='background-color: yellow' ></canvas><br />"
            + "</p>";

        this.vastusekiht = document.getElementById(kihinimi + "_vastus");
        this.joonis = document.getElementById(kihinimi + "_joonis");
        this.kihinimi = kihinimi;

        this.kuva();
    }

    kasSees() {
        return this.seisund;
    }

    /*uusSeisund(asend) {
        this.seisund = asend;
    }

    seisundTekstina() {
        if (this.seisund) {
            return "põleb";
        }
        else if (!this.seisund) {
            return "ei põle";
        }
        else {
            return "viga";
        }
    }*/

    vahetaSeisund() {
        if (this.seisund) {
            this.seisund = false;
        }
        else if (!this.seisund) {
            this.seisund = true;
        }
        else {
            //return "viga";
        }

        this.kuva();
    }

    /*näitaSeisund() {
        console.log(this.kihinimi + ": " + this.seisundTekstina());
    }*/

    kuva() {
        var g = this.joonis.getContext("2d");

        g.fillStyle = "white";
        g.fillRect(0, 0, 100, 100);

        g.lineWidth = 3;
        g.strokeStyle = "blue";
        g.fillStyle = "blue";
        g.beginPath();
        g.arc(50, 35, 20, 0, 2 * Math.PI, true);

        if (this.kasSees()) {
            g.fill();
        }
        else {
            g.stroke();
        }
    }
}