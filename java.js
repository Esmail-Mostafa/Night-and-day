let stars1 = document.getElementById('stars1')
let moon2 = document.getElementById('moon2')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river5 = document.getElementById('river5')
let boat6 = document.getElementById('boat6') 
let mountains7 = document.getElementById('mountains7')
let cv = document.querySelector('.cv')

window.onscroll = function(){
let value = scrollY
stars1.style.left = value +'px';
moon2.style.top = value*4 +'px';
mountains3.style.top = value*2 +'px';
mountains4.style.top = value*1.5 +'px';
river5.style.top = value +'px';
boat6.style.top = value +'px';
boat6.style.left = value*2 +'px';
cv.style.fontSize = value/2 +'px';

if(scrollY>=1){
    cv.style.display = 'block';

}else{
    cv.style.display = 'none';

}
if(scrollY>=60){
    cv.style.fontSize = 60 +'px';
    cv.style.position = 'fixed';
    if(scrollY>=350){
        cv.style.display = 'none';
    }else{
        cv.style.display = 'block';
    }if(scrollY>=140){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'

    }
    

}



}