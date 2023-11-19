
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


var eredmeny1 = console.log(keruletTerulet(4));

interface Auto
{
    gyarto:string,
    tipus:string,
    hengurtart:number,
    benzinesE:boolean
}
