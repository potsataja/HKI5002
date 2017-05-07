class Lamp {
    constructor(kihinimi) {
        this.seisund = true;
        this.kiht = document.getElementById(kihinimi);
        window[kihinimi + "_lamp"] = this;

        this.kiht.innerHTML =
            "<p>" + kihinimi + ": "
            + "<input type='button' value='Vaheta' "
            + " onClick='" + kihinimi + "_lamp.vahetaSeisund();' />"
            + "<input type='button' value='Küsi' "
            + " onClick='" + kihinimi + "_lamp.näitaSeisund();' /></p>";

        this.vastusekiht = document.getElementById(kihinimi + "_vastus");
        this.kihinimi = kihinimi;
    }

    kasSees() {
        return this.seisund;
    }

    uusSeisund(asend) {
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
    }

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

        //console.log(this.kihinimi + ": " + this.seisundTekstina());
    }

    näitaSeisund() {
        console.log(this.kihinimi + ": " + this.seisundTekstina());
    }
}