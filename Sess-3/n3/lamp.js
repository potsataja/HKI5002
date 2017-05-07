class Lamp {
    constructor() {
        this.seisund = true;
    }

    kasSees() {
        return this.seisund;
    }

    uusSeisund(asend) {
        this.seisund = asend;
    }

    seisundTekstina() {
        if(this.seisund) {
            return "põleb";
        }
        else if(!this.seisund) {
            return "ei põle";
        }
        else {
            return "viga";
        }
    }

    vahetaSeisund() {
        if(this.seisund) {
            this.seisund = false;
        }
        else if(!this.seisund) {
            this.seisund = true;
        }
        else {
            //return "viga";
        }
    }
}