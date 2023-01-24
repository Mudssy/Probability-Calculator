class Probabilities{
    constructor(a, b, Na, Nb, aUb, aUNb, NaUb, NaUNb, aAb, aANb, NaAb, NaANb, aGb, aGNb, NaGb, NaGNb, bGa, bGNa, NbGa, NbGNa, mutually_exclusive, independent){
        this.a = a;
        this.b = b;
        this.Na = Na;
        this.Nb = Nb;
        this.aUb = aUb;
        this.aUNb = aUNb;
        this.NaUb = NaUb;
        this.NaUNb = NaUNb;
        this.aAb = aAb;
        this.aANb = aANb;
        this.NaAb = NaAb;
        this.NaANb = NaANb;
        this.aGb = aGb;
        this.aGNb = aGNb;
        this.NaGb = NaGNb;
        this.NaGNb = NaGNb;
        this.bGa = bGa;
        this.bGNa = bGNa;
        this.NbGa = NbGa;
        this.NbGNa = NbGNa;
        this.mutually_exclusive = mutually_exclusive;
        this.independent = independent;
        this.calculate_all()
        this.display()
    }
    display()
    {
        console.log("P(a) = " + this.a);
        console.log("P(b) = " + this.b);
        console.log("P(¬a) = " + this.Na);
        console.log("P(¬b) = " + this.Nb);
        console.log("");
        console.log("P(a U b) = " + this.aUb);
        console.log("P(a U ¬b) = " + this.aUNb);
        console.log("P(¬a U b) = " + this.NaUb);
        console.log("P(¬a U ¬b) = " + this.NaUNb);
        console.log("");
        console.log("P(a ∩ b) = " + this.aAb);
        console.log("P(a ∩ ¬b) = " + this.aANb);
        console.log("P(¬a ∩ b) = " + this.NaAb);
        console.log("P(¬a ∩ ¬b) = " + this.NaANb);
        console.log("");
        console.log("P(a | b) = " + this.aGb);
        console.log("P(a | ¬b) = " + this.aGNb);
        console.log("P(¬a | b) = " + this.NaGb);
        console.log("P(¬a | ¬b) = " + this.NaGNb);
        console.log("");
        console.log("P(b | a) = " + this.bGa);
        console.log("P(b | ¬a) = " +this.bGNa);
        console.log("P(¬b | a) = " + this.NbGa);
        console.log("P(¬b | ¬a) = " + this.NbGNa);
        console.log("");
    }
    calculate_all(){
        for (let i = 0; i < 10; i++){
            this.calc_a();
            this.calc_b();
            this.calc_Na();
            this.calc_Nb();
            this.calc_aUb();
            this.calc_aUNb();
            this.calc_NaUb();
            this.calc_NaUNb();
            this.calc_aAb();
            this.calc_aANb();
            this.calc_NaAb();
            this.calc_NaANb();
            this.calc_aGb();
            this.calc_aGNb();
            this.calc_NaGb();
            this.calc_NaGNb();
            this.calc_bGa();
            this.calc_bGNa();
            this.calc_NbGa();
            this.calc_NbGNa();
        }
    }

    aux(value){
        return 0 <= value && value <= 1
    }

    validateValues() {

        const ids = ["a", "b", "Na", "Nb", "aUb", "aUNb", "NaUb", "NaUNb", "aAb", "aANb", "NaAb", "NaANb", "aGb", "aGNb", "NaGb", "NaGNb", "bGa", "bGNa", "NbGa", "NbGNa"];

        var news = ids.map(id => this.aux(this[id]));
        var conf = news.includes(false);
        return !(ids.map(id => this.aux(this[id])).includes(false));
        
    }
    
    calc_aUb()
    {
        if (this.a != null && this.b!= null && this.aAb!= null){
            this.aUb = this.a + this.b - this.aAb;
        }
        else if (this.mutually_exclusive && this.a != null && this.b!= null){
            this.aUb = this.a + this.b;
        }
    }
    
    calc_aUNb(){
        if (this.a != null && this.Nb!= null && this.aANb!= null){
            this.aUNb = this.a + this.Nb - this.aANb;
        }
    }
    
    calc_NaUb(){
        if (this.Na != null && this.b!= null && this.NaAb!= null){
            this.NaUb = this.Na + this.b - this.NaAb;
        }
    }
    
    calc_NaUNb(){
        if (this.Na != null && this.Nb!= null && this.NaANb!= null){
            this.NaUNb = this.Na + this.Nb - this.NaANb;
        }
    }
    
    calc_aAb()
    {
        if (this.a != null && this.b!= null && this.aUb != null){
            this.aAb = this.a + this.b - this.aUb;
        }
        else if (this.a != null && this.bGa != null){
            this.aAb = this.a * this.bGa;
        }
        else if (this.b != null && this.aGb != null){
            this.aAb = this.b * this.aGb;
        }
        else if (this.independent && this.a != null && this.b != null){
            this.aAb = this.a*this.b;
        }
    }
    
    calc_aANb(){
        if (this.a != null && this.Nb!= null && this.aUNb != null){
            this.aANb = this.a + this.Nb - this.aUNb;
        }
        else if (this.a != null && this.NbGa != null){
            this.aANb = this.a * this.NbGa;
        }
        else if (this.b != null && this.aGb != null){
            this.aANb = this.Nb * this.aGNb;
        }
    }
    
    calc_NaAb(){
        if (this.Na != null && this.b!= null && this.NaUb != null){
            this.NaAb = this.Na + this.b - this.NaUb;
        }
        else if (this.Na != null && this.bGNa != null){
            this.NaAb = this.Na * this.bGNa;
        }
        else if (this.b != null && this.NaGb != null){
            this.NaAb = this.b * this.NaGb;
        }
    }
    
    calc_NaANb(){
        if (this.Na != null && this.Nb!= null && this.NaUNb != null){
            this.NaANb = this.Na + this.Nb - this.NaUNb;
        }
        else if (this.Na != null && this.NbGNa != null){
            this.NaANb = this.Na * this.NbGNa;
        }
        else if (this.Nb != null && this.NaGNb != null){
            this.NaANb = this.Nb * this.NaGNb;
        }
    }
    
    
    calc_Na(){
        if (this.a != null){
            this.Na = 1-this.a;
        }
        else if (this.NaUb != null && this.NaAb != null && this.b != null){
            this.Na = this.NaUb + this.NaAb -this.b;
        }
        else if (this.NaAb != null && this.bGNa != null && this.bGNa != 0){
            this.Na = this.NaAb / this.bGNa;
        }
    }
    
    calc_Nb(){
        if (this.b != null){
            this.Nb = 1-this.b;
        }
        else if (this.aUNb != null && this.aANb != null && this.a != null){
            this.a = this.aUNb + this.aANb -this.a;
        }
        else if (this.aANb != null && this.aGNb != null && this.aGNb != 0){
            this.a = this.aANb / this.aGNb;
        }
    }
    
    calc_a(){
        if (this.Na != null){
            this.a = 1-this.Na;
        }
        else if (this.aUb != null && this.aAb != null && this.b != null){
            this.a = this.aUb + this.aAb -this.b;
        }
        else if (this.aAb != null && this.bGa != null && this.bGa != 0){
            this.a = this.aAb / this.bGa;
        }
    }
    
    calc_b(){
        if (this.Nb != null){
            this.b = 1-this.Nb;
        }
        else if (this.aUb != null && this.aAb != null && this.a != null){
            this.a = this.aUb + this.aAb -this.a;
        }
        else if (this.aAb != null && this.aGb != null && this.aGb != 0){
            this.a = this.aAb / this.aGb;
        }
    }
    
    calc_aGb(){
        
        if (this.NaGb != null){
            this.aGb = 1 - this.NaGb;
        }
        else if (this.aAb != null && this.b != null && this.b != 0){
            this.aGb = this.aAb / this.b;
        }
        else if (this.bGa != null && this.a != null && this.bGNa != null && this.Na != null){
            this.aGb = (this.bGa * this.a)/(this.bGa * this.a + this.bGNa * this.Na);
        }
    }
    
    calc_aGNb(){
        if (this.NaGNb != null){
            this.aGNb = 1 - this.NaGNb;
        }
        else if (this.aANb != null && this.Nb != null && this.Nb!=0){
            this.aGNb = this.aANb / this.Nb;
        }
        else if (this.NbGa != null && this.a != null && this.NbGNa != null && this.Na != null){
            this.aGNb = (this.NbGa * this.a)/(this.NbGa * this.a + this.NbGNa * this.Na);
        }
    }
    
    calc_NaGb(){
        if (this.aGb != null){
            this.NaGb = 1 - this.aGb;
        }
        else if (this.NaAb != null && this.b != null && this.b != 0){
            this.NaGb = this.NaAb / this.b;
        }
        else if (this.bGNa != null && this.Na != null && this.bGa != null && this.a != null){
            this.NaGb = (this.bGNa * this.Na)/(this.bGNa * this.Na + this.bGa * this.a);
        }
    }
    
    calc_NaGNb(){
        if (this.aGNb != null){
            this.NaGNb = 1 - this.aGNb;
        }
        else if (this.NaANb != null && Nb != null && this.b != 0){
            this.NaGNb = this.NaANb / this.b;
        }
        else if (this.NbGNa != null && this.Na != null && this.NbGa != null && this.a != null){
            this.NaGNb = (this.NbGNa * this.Na)/(this.NbGNa * this.Na + this.bGa * this.a);
        }
    }
    
    calc_bGa(){
        if (this.NbGa != null){
            this.bGa = 1 - this.NbGa;
        }
        else if (this.aAb != null && this.a != null && this.a != 0){
            this.bGa = this.aAb / this.a;
        }
        else if (this.aGb != null && this.b != null && this.aGNb != null && this.Nb != null){
            this.bGa = (this.aGb * this.b)/(this.aGb * this.b + this.aGNb * this.Nb);
        }
    }
    
    calc_bGNa(){
        if (this.NbGNa != null){
            this.bGNa = 1 - this.NbGNa;
        }
        else if (this.NaAb != null && this.Na != null && this.Na != 0){
            this.bGNa = this.NaAb / this.Na;
        }
        else if (this.NaGb != null && this.b != null && this.NaGNb != null && this.Nb != null){
            this.bGNa = (this.NaGb * this.b)/(this.NaGb * this.b + this.NaGNb * this.Nb);
        }
    }
    
    calc_NbGa(){
        if (this.bGa != null){
            this.NbGa = 1 - this.bGa;
        }
        else if (this.aANb != null && this.a != null && this.a != 0){
            this.NbGa = this.aANb / this.a;
        }
        else if (this.aGNb != null && this.Nb != null && this.aGb != null && this.b != null){
            this.NbGa = (this.aGNb * this.Nb)/(this.aGNb * this.Nb + this.aGb * this.b);
        }
    }
    
    calc_NbGNa(){
        if (this.bGNa != null){
            this.NbGNa = 1 - this.bGNa;
        }
        else if (this.NaANb != null && this.Na != null && this.Na != 0){
            this.NbGNa = this.NaANb / this.Na;
        }
        else if (this.NaGNb != null && Nb != null && this.NaGb != null && this.b != null){
            this.NbGNa = (this.NaGNb * this.Nb)/(this.NaGNb * this.Nb + this.NaGb * this.b);
        }
    }
}


function getElementValue(elementID) {
    
    var num = parseFloat(document.getElementById(elementID).value)
    
    if (isNaN(num)) return null
    else return num
    
}

function getSwitchState(elementID) {
    
    return (document.getElementById(elementID).checked)
    
}

function isElementValid(elementID) {
    
    var num = parseFloat(document.getElementById(elementID).value);
    return (isNaN(num) || (0 <= num && num <= 1));
    
}

function isValid(){
    
    const ids = ["a", "b", "Na", "Nb", "aUb", "aUNb", "NaUb", "NaUNb", "aAb", "aANb", "NaAb", "NaANb", "aGb", "aGNb", "NaGb", "NaGNb", "bGa", "bGNa", "NbGa", "NbGNa"];
    var validNums = true;
    
    return !(ids.map(id => isElementValid(id)).includes(false));
    
}


function displayDangerMessage(message){
    document.getElementById("alert").innerHTML = `

    <div class="alert alert-danger d-flex align-items-center" role="alert">
        <p>
            <span class="bi bi-exclamation-triangle"> 
            ${message}
        </p>

        
    </div>

    `
}

function displayWarningMessage(message){
    document.getElementById("alert").innerHTML = `

    <div class="alert alert-warning d-flex align-items-center" role="alert">
        <p>
            <span class="bi bi-exclamation-triangle"> 
            ${message}
        </p>

        
    </div>

    `
}
function displaySuccessMessage(message){
    document.getElementById("alert").innerHTML = `

    <div class="alert alert-success d-flex align-items-center" role="alert">
        <p>
            <span class="bi bi-check-circle"> 
            ${message}
        </p>

        
    </div>

    `
}

function displayInfoMessage(message){
    document.getElementById("alert").innerHTML = `

    <div class="alert alert-primary d-flex align-items-center" role="alert">
        <p>
            <span class="bi bi-info-circle"> 
            ${message}
        </p>

        
    </div>

    `
}



function fillProbabilities() {
    
    var a = getElementValue("a")
    var b = getElementValue("b");
    var Na = getElementValue("Na");
    var Nb = getElementValue("Nb");
    var aUb = getElementValue("aUb");
    var aUNb = getElementValue("aUNb");
    var NaUb = getElementValue("NaUb");
    var NaUNb = getElementValue("NaUNb");
    var aAb = getElementValue("aAb");
    var aANb = getElementValue("aANb");
    var NaAb = getElementValue("NaAb");
    var NaANb = getElementValue("NaANb");
    var aGb = getElementValue("aGb");
    var aGNb = getElementValue("aGNb");
    var NaGb = getElementValue("NaGNb");
    var NaGNb = getElementValue("NaGNb");
    var bGa = getElementValue("bGa");
    var bGNa = getElementValue("bGNa");
    var NbGa = getElementValue("NbGa");
    var NbGNa = getElementValue("NbGNa");
    var mutually_exclusive = getSwitchState("mutually_exclusive");
    var independent = getSwitchState("independent");
    
    var probs = new Probabilities(a, b, Na, Nb, aUb, aUNb, NaUb, NaUNb, aAb, aANb, NaAb, NaANb, aGb, aGNb, NaGb, NaGNb, bGa, bGNa, NbGa, NbGNa, mutually_exclusive, independent)
    
    return probs
    
}

function setValues(probs) {
    
    const ids = ["a", "b", "Na", "Nb", "aUb", "aUNb", "NaUb", "NaUNb", "aAb", "aANb", "NaAb", "NaANb", "aGb", "aGNb", "NaGb", "NaGNb", "bGa", "bGNa", "NbGa", "NbGNa", "mutually_exclusive", "independent"];
    
    var allCalculated = true
    ids.forEach(id => {
        
        var testing = document.getElementById(id);
        var prob = probs[id]

        if (prob == null) {
            allCalculated = false
            testing.value = ""
        }
        else testing.value = Math.round(prob * 100000) / 100000;

    })

    return allCalculated
    
}

function clearDocument() {
    
    const ids = ["a", "b", "Na", "Nb", "aUb", "aUNb", "NaUb", "NaUNb", "aAb", "aANb", "NaAb", "NaANb", "aGb", "aGNb", "NaGb", "NaGNb", "bGa", "bGNa", "NbGa", "NbGNa"];

    ids.forEach(id => {

        document.getElementById(id).value = "";

    })

    displayInfoMessage("Values have been cleared")
    
}

function updateDocument() {
    
    if (isValid()) {
        
        var prob = fillProbabilities();
        
        if (prob.validateValues()) { 
            if(setValues(prob)){
                displaySuccessMessage("Probabilites calculated successfully")
            }
            else {
                displayWarningMessage("Not enough information provided to calculate all probabilities")
            }

        } else {
            displayDangerMessage("Impossible probabilities given")
        }
        
    }
    else displayWarningMessage("Please enter valid probabilities")

}