var bulp=0

function findbulp()
{
    if(bulp==0)
    {
        document.getElementById("new").src="./day.jpg";
        bulp=1;
    }
    else{
        document.getElementById("new").src="./night.jpg";
        bulp=0;
    }
}