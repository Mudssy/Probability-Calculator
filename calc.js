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
        this.calculate_all()
        this.display()
    }
    display()
    {
        console.log("P(a) = " + a);
        console.log("P(b) = " + b);
        console.log("P(¬a) = " + Na);
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
            calc_a();
            calc_b();
            calc_Na();
            calc_Nb();
            calc_aUb();
            calc_aUNb();
            calc_NaUb();
            calc_NaUNb();
            calc_aAb();
            calc_aANb();
            calc_NaAb();
            calc_NaANb();
            calc_aGb();
            calc_aGNb();
            calc_NaGb();
            calc_NaGNb();
            calc_bGa();
            calc_bGNa();
            calc_NbGa();
            calc_NbGNa();
        }
    }
    calc_aUb()
    {
        if (a != null && b!= null && aAb!= null){
            aUb = a + b - aAb;
        }
        else if (mutually_exclusive && a != null && b!= null){
            aUb = a + b;
        }
    }
    
    calc_aUNb(){
        if (a != null && Nb!= null && aANb!= null){
            aUNb = a + Nb - aANb;
        }
    }
    
    calc_NaUb(){
        if (Na != null && b!= null && NaAb!= null){
            NaUb = Na + b - NaAb;
        }
    }
    
    calc_NaUNb(){
        if (Na != null && Nb!= null && NaANb!= null){
            NaUNb = Na + Nb - NaANb;
        }
    }
    
    calc_aAb()
    {
        if (a != null && b!= null && aUb != null){
            aAb = a + b - aUb;
        }
        else if (a != null && bGa != null){
            aAb = a * bGa;
        }
        else if (b != null && aGb != null){
            aAb = b * aGb;
        }
        else if (independent && a != null && b != null){
            aAb = a*b;
        }
    }
    
    calc_aANb(){
        if (a != null && Nb!= null && aUNb != null){
            aANb = a + Nb - aUNb;
        }
        else if (a != null && NbGa != null){
            aANb = a * NbGa;
        }
        else if (b != null && aGb != null){
            aANb = Nb * aGNb;
        }
    }
    
    calc_NaAb(){
        if (Na != null && b!= null && NaUb != null){
            NaAb = Na + b - NaUb;
        }
        else if (Na != null && bGNa != null){
            NaAb = Na * bGNa;
        }
        else if (b != null && NaGb != null){
            NaAb = b * NaGb;
        }
    }
    
    calc_NaANb(){
        if (Na != null && Nb!= null && NaUNb != null){
            NaANb = Na + Nb - NaUNb;
        }
        else if (Na != null && NbGNa != null){
            NaANb = Na * NbGNa;
        }
        else if (Nb != null && NaGNb != null){
            NaANb = Nb * NaGNb;
        }
    }
    
    
    calc_Na(){
        if (a != null){
            Na = 1-a;
        }
        else if (NaUb != null && NaAb != null && b != null){
            Na = NaUb + NaAb -b;
        }
        else if (NaAb != null && bGNa != null && bGNa != 0){
            Na = NaAb / bGNa;
        }
    }
    
    calc_Nb(){
        if (b != null){
            Nb = 1-b;
        }
        else if (aUNb != null && aANb != null && a != null){
            a = aUNb + aANb -a;
        }
        else if (aANb != null && aGNb != null && aGNb != 0){
            a = aANb / aGNb;
        }
    }
    
    calc_a(){
        if (Na != null){
            a = 1-Na;
        }
        else if (aUb != null && aAb != null && b != null){
            a = aUb + aAb -b;
        }
        else if (aAb != null && bGa != null && bGa != 0){
            a = aAb / bGa;
        }
    }
    
    calc_b(){
        if (Nb != null){
            b = 1-Nb;
        }
        else if (aUb != null && aAb != null && a != null){
            a = aUb + aAb -a;
        }
        else if (aAb != null && aGb != null && aGb != 0){
            a = aAb / aGb;
        }
    }
    
    calc_aGb(){
        
        if (NaGb != null){
            aGb = 1 - NaGb;
        }
        else if (aAb != null && b != null && b != 0){
            aGb = aAb / b;
        }
        else if (bGa != null && a != null && bGNa != null && Na != null){
            aGb = (bGa * a)/(bGa * a + bGNa * Na);
        }
    }
    
    calc_aGNb(){
        if (NaGNb != null){
            aGNb = 1 - NaGNb;
        }
        else if (aANb != null && Nb != null && Nb!=0){
            aGNb = aANb / Nb;
        }
        else if (NbGa != null && a != null && NbGNa != null && Na != null){
            aGNb = (NbGa * a)/(NbGa * a + NbGNa * Na);
        }
    }
    
    calc_NaGb(){
        if (aGb != null){
            NaGb = 1 - aGb;
        }
        else if (NaAb != null && b != null && b != 0){
            NaGb = NaAb / b;
        }
        else if (bGNa != null && Na != null && bGa != null && a != null){
            NaGb = (bGNa * Na)/(bGNa * Na + bGa * a);
        }
    }
    
    calc_NaGNb(){
        if (aGNb != null){
            NaGNb = 1 - aGNb;
        }
        else if (NaANb != null && Nb != null && b != 0){
            NaGNb = NaANb / b;
        }
        else if (NbGNa != null && Na != null && NbGa != null && a != null){
            NaGNb = (NbGNa * Na)/(NbGNa * Na + bGa * a);
        }
    }
    
    calc_bGa(){
        if (NbGa != null){
            bGa = 1 - NbGa;
        }
        else if (aAb != null && a != null && a != 0){
            bGa = aAb / a;
        }
        else if (aGb != null && b != null && aGNb != null && Nb != null){
            bGa = (aGb * b)/(aGb * b + aGNb * Nb);
        }
    }
    
    calc_bGNa(){
        if (NbGNa != null){
            bGNa = 1 - NbGNa;
        }
        else if (NaAb != null && Na != null && Na != 0){
            bGNa = NaAb / Na;
        }
        else if (NaGb != null && b != null && NaGNb != null && Nb != null){
            bGNa = (NaGb * b)/(NaGb * b + NaGNb * Nb);
        }
    }
    
    calc_NbGa(){
        if (bGa != null){
            NbGa = 1 - bGa;
        }
        else if (aANb != null && a != null && a != 0){
            NbGa = aANb / a;
        }
        else if (aGNb != null && Nb != null && aGb != null && b != null){
            NbGa = (aGNb * Nb)/(aGNb * Nb + aGb * b);
        }
    }
    
    calc_NbGNa(){
        if (bGNa != null){
            NbGNa = 1 - bGNa;
        }
        else if (NaANb != null && Na != null && Na != 0){
            NbGNa = NaANb / Na;
        }
        else if (NaGNb != null && Nb != null && NaGb != null && b != null){
            NbGNa = (NaGNb * Nb)/(NaGNb * Nb + NaGb * b);
        }
    }

    
}