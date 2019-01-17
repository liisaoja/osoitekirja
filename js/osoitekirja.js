/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var henkilo = {
    sukunimi: "",
    etunimi: "",
    puhelin: 0,
    syntymavuosi: 0,
    
   
    palautaNimi: function nimi(){
        return this.sukunimi +", "+ this.etunimi + "";
    },
   
    
    palautaIka: function ika (){
        var d = new Date();
        var n = d.getFullYear(); 
        var ikavuodet = n - this.syntymavuosi;
      return ikavuodet;
    }
    };
    
 
 var osoitekirja = {
     henkilot: new Array(),
     
     palautaLkm: function lkm (){
         return this.henkilot.length;
     },
     

     talletaHenkilo: function uusi(henkilo){
         this.henkilot.push(henkilo);
     },
     
     poistaHenkilo: function pois(index){
         this.henkilot.splice(index, 1);
         
     },
     
     palautaKeski_ika: function keski_ika (){
         var summa = 0;
         for(var i=0; i < this.henkilot.length; i++) {
        var henkilo = this.henkilot[i];
        var ika = henkilo.palautaIka();
        summa = summa + ika;
     };
         var keskiarvo = summa / this.henkilot.length;
         return keskiarvo;
     }
 
 };
 
 function alkudata(){
   
     osoitekirja.henkilot = [];
     
     var kaveri = Object.create(henkilo);
     kaveri.etunimi = "Pekka";
     kaveri.sukunimi = "Töpöhäntä";
     kaveri.puhelin = 06078954376;
     kaveri.syntymavuosi = 1985;
     osoitekirja.talletaHenkilo(kaveri);
     
     kaveri = Object.create(henkilo);
     kaveri.etunimi = "Tonttu";
     kaveri.sukunimi = "Torvinen";
     kaveri.puhelin = 06078954444;
     kaveri.syntymavuosi = 1954;
     osoitekirja.talletaHenkilo(kaveri);
     
     kaveri = Object.create(henkilo);
     kaveri.etunimi = "Nuuska";
     kaveri.sukunimi = "Muikkunen";
     kaveri.puhelin = 00677954444;
     kaveri.syntymavuosi = 1963;
     osoitekirja.talletaHenkilo(kaveri);
     
     
    tulostus();
     
 }
 
 function tulostus(){
     var tulostus = document.getElementById("kaikki1");
     tulostus.innerHTML = "";
      var tulostus2 = document.getElementById("kaikki2");
      tulostus2.innerhHTML = "";
     
     for(var i=0; i < osoitekirja.henkilot.length; i++) {
         var henkilo = osoitekirja.henkilot[i];
         tulostus.innerHTML += 
            "<label class='tulostus' onclick= 'tulostaYksi("+ i +")'>" + henkilo.palautaNimi() + "</label>";
     }

         tulostus2.innerHTML = "Keski-ikä: " + osoitekirja.palautaKeski_ika() + "<br>" +
            "Yhteensä: " + osoitekirja.palautaLkm();
    
     document.getElementById("yksiKaveri").innerHTML = "";
     }
 
  
function poista (index) {
     osoitekirja.poistaHenkilo(index);
     tulostus();
     document.getElementById("yksiKaveri").innerHTML = "";
 }
 
 function muuta (index) {
     var kaveri = osoitekirja.henkilot[index];
     document.getElementById("sukunimi").value = kaveri.sukunimi;
     document.getElementById("etunimi").value = kaveri.etunimi;
     document.getElementById("puhelin").value = kaveri.puhelin;
     document.getElementById("syntymavuosi").value = kaveri.syntymavuosi;
     document.getElementById("index").value= index;
     
       
 }
 
function tallenna(){
     if (document.getElementById('index').value !== ""){
        var i = Number(document.getElementById('index').value);
        var tyyppi = osoitekirja.henkilot[i];
        tyyppi.sukunimi = document.getElementById("sukunimi").value;
        tyyppi.etunimi = document.getElementById("etunimi").value;
        tyyppi.puhelin = Number(document.getElementById("puhelin").value);
        tyyppi.syntymavuosi = Number(document.getElementById("syntymavuosi").value);
     } 
     else {
     var kaveri = Object.create(henkilo);
     kaveri.sukunimi = document.getElementById("sukunimi").value;
     kaveri.etunimi = document.getElementById("etunimi").value;
     kaveri.puhelin = Number(document.getElementById("puhelin").value);
     kaveri.syntymavuosi = Number(document.getElementById("syntymavuosi").value);
     osoitekirja.talletaHenkilo(kaveri);
 }
     tulostus();
     
     document.getElementById("sukunimi").value = "";
     document.getElementById("etunimi").value = "";
     document.getElementById("puhelin").value = "";
     document.getElementById("syntymavuosi").value = "";
     document.getElementById("index").value = "";
     
 }
 
 function tulostaYksi(index){
      var henkilo = osoitekirja.henkilot[index];
      var kaveri = document.getElementById("yksiKaveri");
      
      kaveri.innerHTML = "Nimi: " + henkilo.palautaNimi() + "<br>" +
              "Puhelin: " + henkilo.puhelin + "<br>" +
              "Ikä: " + henkilo.palautaIka() +
              "<button onclick='poista("+index+")'>Poista</button>" +
              "<button onclick='muuta("+index+")'>Muokkaa</button>";
 }
 

 
 
 function peru(){
     document.getElementById("sukunimi").value = "";
     document.getElementById("etunimi").value = "";
     document.getElementById("puhelin").value = "";
     document.getElementById("syntymavuosi").value = "";
 }
 
