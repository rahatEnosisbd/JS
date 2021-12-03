for(let i=0; i<5; i++)
{
    console.log(i)
}

let num=0;

do{
    console.log("num= "+num);
    num++;
} while (num<5);

while(num>0)
{
    console.log("num  is "+num);
    num--;
}


console.log("\n*********************************")
console.log("labeled statement:\n")

loop1:
for(let i=0; i<5; i++)
{
    if(i==1)
    {
        continue loop1;
    }
    console.log("index i = "+i);
}

console.log("Breaking the outer loop:")

loop2:
for(let i=0; i<5; i++)
{
    for(let j=0; j<5; j++)
    {
        if(j==2)
        {
            break loop2;
        }
        console.log("i= "+ i+", j="+j);
    }
}