setInterval(func,1000);

function func(){

    
        const secondj = document.querySelector('#sec');
        const minutej = document.querySelector('#min');
        const hourj = document.querySelector('#hou');
        
        const date = new Date();
        
        let s = date.getSeconds()*6;
        let m = date.getMinutes()*6;
        let h = date.getHours()*30;
        
        secondj.style.transform = `rotate(${s}deg)`;
        minutej.style.transform = `rotate(${m}deg)`;
        hourj.style.transform = `rotate(${h}deg)`;
    
    

}

func();


