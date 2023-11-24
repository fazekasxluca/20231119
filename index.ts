
 function negativVanE(szamT : number[]): boolean {

    var vanE :boolean = false;

 for(var i:number = 0; i< szamT.length; i++)
 {
    if(szamT[i] < 0)
    {
      vanE = true;
    }
     
 }

 return vanE;
}
var  szamTomb: number[] = [-1,2,4];
console.log(negativVanE(szamTomb)); 

function keruletTerulet(sugar: number) : [number,number]{

    var kerulet:number = 2 * sugar * Math.PI;

    var terulet:number = sugar * sugar * Math.PI;

    var tuple: [number,number] = [kerulet,terulet];

    return tuple;
}

var asd;
var eredmeny1 = console.log(keruletTerulet(4));


interface Auto
{
    gyarto:string,
    tipus:string,
    hengurtart:number,
    benzinesE:boolean
}


var auto1: Auto ={

   gyarto:"Opel", tipus:"204",hengurtart:1200,benzinesE:true,   
}
var auto2: Auto ={

  gyarto:"Peudgeot", tipus:"D",hengurtart:900,benzinesE:true,   
}
var auto3: Auto ={

  gyarto:"Mazda", tipus:"N",hengurtart:1300,benzinesE:true,   
}
var auto4: Auto ={

  gyarto:"Ford", tipus:"M",hengurtart:1600,benzinesE:true,   
}

var autokTomb:Auto[] = [auto1,auto2,auto3,auto4];


function minimumKeres(tomb:Auto[]): Auto
{

  var henrUrtartMin:Auto = tomb[0];

  for(var i:number = 0; i < tomb.length;i++)
  {
      if(henrUrtartMin.hengurtart > tomb[i].hengurtart)
      {
        henrUrtartMin.hengurtart = tomb[i].hengurtart;
      }
  }

  return henrUrtartMin;

}


var eredmeny2 = console.log(minimumKeres(autokTomb));


