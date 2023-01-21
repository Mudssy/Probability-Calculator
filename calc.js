class Probabilities{
    constructor(){
        this.a = 0.125;
        this.b = 0.125;
        this.Na = null;
        this.Nb  =null;
        this.aUb = null;
        this.aUNb = null;
        this.NaUb = null;
        this.NaUNb = null;
        this.aAb = null;
        this.aANb = null;
        this.NaAb = null;
        this.NaANb = null;
        this.aGb = null;
        this.aGNb = null;
        this.NaGb = null;
        this.NaGNb = null;
        this.bGa = null;
        this.bGNa = null;
        this.NbGa = null;
        this.NbGNa = null;
        this.mutually_exclusive = false;
        this.independent = false;
        this.calculate_all()
        this.display()
    }
    display()
    {
        console.log("P(a) = " + this.a);
        console.log("P(b) = " + this.b);
        console.log("P(¬a) = " + this.Na);
        console.log("P(¬b) = " + Nb);
        console.log("");
        console.log("P(a U b) = " + aUb);
        console.log("P(a U ¬b) = " + aUNb);
        console.log("P(¬a U b) = " + NaUb);
        console.log("P(¬a U ¬b) = " + NaUNb);
        console.log("");
        console.log("P(a ∩ b) = " + aAb);
        console.log("P(a ∩ ¬b) = " + aANb);
        console.log("P(¬a ∩ b) = " + NaAb);
        console.log("P(¬a ∩ ¬b) = " + NaANb);
        console.log("");
        console.log("P(a | b) = " + aGb);
        console.log("P(a | ¬b) = " + aGNb);
        console.log("P(¬a | b) = " + NaGb);
        console.log("P(¬a | ¬b) = " + NaGNb);
        console.log("");
        console.log("P(b | a) = " + bGa);
        console.log("P(b | ¬a) = " +bGNa);
        console.log("P(¬b | a) = " + NbGa);
        console.log("P(¬b | ¬a) = " + NbGNa);
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
    calc_aUb()
    {
        if (this.a != null && this.b!= null && this.aAb!= null){
            this.aUb = this.a + this.b - this.aAb;
        }
        else if (this.mutually_exclusive && this.a != null && this.b!= null){
            aUb = this.a + this.b;
        }
    }
    
    calc_aUNb(){
        if (this.a != null && Nb!= null && aANb!= null){
            aUNb = this.a + Nb - aANb;
        }
    }
    
    calc_NaUb(){
        if (this.Na != null && this.b!= null && NaAb!= null){
            NaUb = this.Na + this.b - NaAb;
        }
    }
    
    calc_NaUNb(){
        if (this.Na != null && Nb!= null && NaANb!= null){
            NaUNb = this.Na + Nb - NaANb;
        }
    }
    
    calc_aAb()
    {
        if (this.a != null && this.b!= null && aUb != null){
            aAb = this.a + this.b - aUb;
        }
        else if (this.a != null && bGa != null){
            aAb = this.a * bGa;
        }
        else if (this.b != null && aGb != null){
            aAb = this.b * aGb;
        }
        else if (independent && this.a != null && this.b != null){
            aAb = this.a*this.b;
        }
    }
    
    calc_aANb(){
        if (this.a != null && Nb!= null && aUNb != null){
            aANb = this.a + Nb - aUNb;
        }
        else if (this.a != null && NbGa != null){
            aANb = this.a * NbGa;
        }
        else if (this.b != null && aGb != null){
            aANb = Nb * aGNb;
        }
    }
    
    calc_NaAb(){
        if (this.Na != null && this.b!= null && NaUb != null){
            NaAb = this.Na + this.b - NaUb;
        }
        else if (this.Na != null && bGNa != null){
            NaAb = this.Na * bGNa;
        }
        else if (this.b != null && NaGb != null){
            NaAb = this.b * NaGb;
        }
    }
    
    calc_NaANb(){
        if (this.Na != null && Nb!= null && NaUNb != null){
            NaANb = this.Na + Nb - NaUNb;
        }
        else if (this.Na != null && NbGNa != null){
            NaANb = this.Na * NbGNa;
        }
        else if (Nb != null && NaGNb != null){
            NaANb = Nb * NaGNb;
        }
    }
    
    
    calc_Na(){
        if (this.a != null){
            this.Na = 1-this.a;
        }
        else if (NaUb != null && NaAb != null && this.b != null){
            this.Na = NaUb + NaAb -this.b;
        }
        else if (NaAb != null && bGNa != null && bGNa != 0){
            this.Na = NaAb / bGNa;
        }
    }
    
    calc_Nb(){
        if (this.b != null){
            Nb = 1-this.b;
        }
        else if (aUNb != null && aANb != null && this.a != null){
            this.a = aUNb + aANb -this.a;
        }
        else if (aANb != null && aGNb != null && aGNb != 0){
            this.a = aANb / aGNb;
        }
    }
    
    calc_a(){
        if (this.Na != null){
            this.a = 1-this.Na;
        }
        else if (aUb != null && aAb != null && this.b != null){
            this.a = aUb + aAb -this.b;
        }
        else if (aAb != null && bGa != null && bGa != 0){
            this.a = aAb / bGa;
        }
    }
    
    calc_b(){
        if (Nb != null){
            this.b = 1-Nb;
        }
        else if (aUb != null && aAb != null && this.a != null){
            this.a = aUb + aAb -this.a;
        }
        else if (aAb != null && aGb != null && aGb != 0){
            this.a = aAb / aGb;
        }
    }
    
    calc_aGb(){
        
        if (NaGb != null){
            aGb = 1 - NaGb;
        }
        else if (aAb != null && this.b != null && this.b != 0){
            aGb = aAb / this.b;
        }
        else if (bGa != null && this.a != null && bGNa != null && this.Na != null){
            aGb = (bGa * this.a)/(bGa * this.a + bGNa * this.Na);
        }
    }
    
    calc_aGNb(){
        if (NaGNb != null){
            aGNb = 1 - NaGNb;
        }
        else if (aANb != null && Nb != null && Nb!=0){
            aGNb = aANb / Nb;
        }
        else if (NbGa != null && this.a != null && NbGNa != null && this.Na != null){
            aGNb = (NbGa * this.a)/(NbGa * this.a + NbGNa * this.Na);
        }
    }
    
    calc_NaGb(){
        if (aGb != null){
            NaGb = 1 - aGb;
        }
        else if (NaAb != null && this.b != null && this.b != 0){
            NaGb = NaAb / this.b;
        }
        else if (bGNa != null && this.Na != null && bGa != null && this.a != null){
            NaGb = (bGNa * this.Na)/(bGNa * this.Na + bGa * this.a);
        }
    }
    
    calc_NaGNb(){
        if (aGNb != null){
            NaGNb = 1 - aGNb;
        }
        else if (NaANb != null && Nb != null && this.b != 0){
            NaGNb = NaANb / this.b;
        }
        else if (NbGNa != null && this.Na != null && NbGa != null && this.a != null){
            NaGNb = (NbGNa * this.Na)/(NbGNa * this.Na + bGa * this.a);
        }
    }
    
    calc_bGa(){
        if (NbGa != null){
            bGa = 1 - NbGa;
        }
        else if (aAb != null && this.a != null && this.a != 0){
            bGa = aAb / this.a;
        }
        else if (aGb != null && this.b != null && aGNb != null && Nb != null){
            bGa = (aGb * this.b)/(aGb * this.b + aGNb * Nb);
        }
    }
    
    calc_bGNa(){
        if (NbGNa != null){
            bGNa = 1 - NbGNa;
        }
        else if (NaAb != null && this.Na != null && this.Na != 0){
            bGNa = NaAb / this.Na;
        }
        else if (NaGb != null && this.b != null && NaGNb != null && Nb != null){
            bGNa = (NaGb * this.b)/(NaGb * this.b + NaGNb * Nb);
        }
    }
    
    calc_NbGa(){
        if (bGa != null){
            NbGa = 1 - bGa;
        }
        else if (aANb != null && this.a != null && this.a != 0){
            NbGa = aANb / this.a;
        }
        else if (aGNb != null && Nb != null && aGb != null && this.b != null){
            NbGa = (aGNb * Nb)/(aGNb * Nb + aGb * this.b);
        }
    }
    
    calc_NbGNa(){
        if (bGNa != null){
            NbGNa = 1 - bGNa;
        }
        else if (NaANb != null && this.Na != null && this.Na != 0){
            NbGNa = NaANb / this.Na;
        }
        else if (NaGNb != null && Nb != null && NaGb != null && this.b != null){
            NbGNa = (NaGNb * Nb)/(NaGNb * Nb + NaGb * this.b);
        }
    }
}

function calculateProbs(){
    var probs = new Probabilities()
}