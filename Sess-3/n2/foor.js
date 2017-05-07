class Foor {
    constructor() {
        this.tuli = "roheline";
    }
    
    kysiTuli(){ 
        return this.tuli;
    }

    muudaTuli(uusTuli){
        this.tuli = uusTuli;
    }
}


/*function foor() {
    this.tuli = "roheline";
    this.kysiTuli = function () { return this.tuli; }
    this.muudaTuli = function (uusTuli) { this.tuli = uusTuli; }
}*/

