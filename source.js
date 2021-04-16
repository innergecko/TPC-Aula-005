let writeOutput = function(text)
{
    document.write('<h2>TPC Aula 005</h2>');

}

let truncateString = function(str,num)
{
    if(str.length <= num)
    {
        return str;
    }

    return str.slice(0,num)+'...';

}
document.write(truncateString("<h2>Amanhã faço dieta, hoje é que não me apetece</h2>",48));

document.write(truncateString("Amanhã faço dieta, hoje é que não me apetece",10));

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' '); 
 }
 
 document.write(titleCase("Amanhã faço dieta, hoje é que não me apetece"));