function add() {
    let act=0 , b=0 ;
    act= document.getElementById('screen').value;
    b=act.charAt (act.length-1) ;
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        document.getElementById('screen').value=act.substring(0,act.length-1);
        document.getElementById('screen').value+='+';
    }else{
        document.getElementById('screen').value+='+';
    }
}
function sub() {
    let act=0 , b=0 ;
    act= document.getElementById('screen').value;
    b=act.charAt (act.length-1) ;
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        document.getElementById('screen').value=act.substring(0,act.length-1);
        document.getElementById('screen').value+='-';
    }else{
        document.getElementById('screen').value+='-';
    }
}
function di() {
    let act=0 , b=0 ;
    act= document.getElementById('screen').value;
    b=act.charAt (act.length-1) ;
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        document.getElementById('screen').value=act.substring(0,act.length-1);
        document.getElementById('screen').value+='/';
    }else{
        document.getElementById('screen').value+='/';
    }
}
function mul() {
    let act=0 , b=0 ;
    act= document.getElementById('screen').value;
    b=act.charAt (act.length-1) ;
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        document.getElementById('screen').value=act.substring(0,act.length-1);
        document.getElementById('screen').value+='*';
    }else{
        document.getElementById('screen').value+='*';
    }
}
function result() {
    document.getElementById('screen').value='';
    document.getElementById('eee').value='';
}
function del() {
    document.getElementById('screen').value=document.getElementById('screen').value.toString().slice(0,-1);
    document.getElementById('eee').value='';
}
