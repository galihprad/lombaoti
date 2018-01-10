function DayDiff(LombaDate)
{
	var TYear=LombaDate.getFullYear();
        var TDay=new Date();
        TDay.getFullYear(TYear);
        var DayCount=(LombaDate-TDay)/(1000*60*60*24);
    DayCount=Math.round(DayCount+0.5);
    if(DayCount>=0){
        return("H - "+DayCount);
    }
    else{
        return("");
    }
}

function DayDiff2(LombaDate)
{
	var TYear=LombaDate.getFullYear();
        var TDay=new Date();
        TDay.getFullYear(TYear);
        var DayCount=(LombaDate-TDay)/(1000*60*60*24);
       DayCount=Math.round(DayCount+0.5); 
    if(DayCount<0){
        return("CLOSED");
    }
    else{
        return("");
    }
}

