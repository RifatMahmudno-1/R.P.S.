var splayer=0;
var scomputer=0;
var psimg=document.querySelector('.psimg');
var csimg=document.querySelector('.csimg');

document.querySelector('.btn').addEventListener('click',function(){
    document.querySelector('.rpcimg').style='display: grid;grid-template-columns: 30% 30% 30%; justify-content: space-around;';
    document.querySelector('.btn').style.display='none';
    document.querySelector('.endpoint').style.display='none';
    document.querySelector('.draw').style.display='none';
});

document.querySelector('.btn-1').addEventListener('click',function(){
    pIscore=1;
    main();
});

document.querySelector('.btn-2').addEventListener('click',function(){
    pIscore=2;
    main();
});

document.querySelector('.btn-3').addEventListener('click',function(){
    pIscore=3;
    main();
});

function main(){
    var finish=document.querySelector('.inp').value;
    cIscore=Math.floor(Math.random()*3+1);

    psimg.src='dice-'+pIscore+'.png';
    csimg.src='dice-'+cIscore+'.png';

    if(splayer==finish||scomputer==finish){
        winner();
    }else if(pIscore==1&&cIscore==3){
        splayer++
    }else if(pIscore==2&&cIscore==1){
        splayer++
    }else if(pIscore==3&&cIscore==2){
        splayer++
    }else if(cIscore==1&&pIscore==3){
        scomputer++
    }else if(cIscore==2&&pIscore==1){
        scomputer++
    }else if(cIscore==3&&pIscore==2){
        scomputer++
    }else{
        document.querySelector('.draw').style='text-align:center; font-size: 30px; color: blue';
        document.querySelector('.draw').innerHTML='<h1>Draw!!<h1>';
    }

    document.querySelector('.splayer').textContent=splayer;
    document.querySelector('.scomputer').textContent=scomputer;
    console.log(pIscore,cIscore,finish);
};
function winner(){
    var finish=document.querySelector('.inp').value;
    if(splayer==finish&&splayer>0){
        document.querySelector('.winner').innerHTML='<h1 style="text-align:center; font-size: 200%; color: green; margin:2% 0;">You Won<br><Button onclick="window.location.reload()" style="background: linear-gradient(rgb(255, 0, 119),rgb(255, 0, 179)); border: none; padding: 1% 2%; font-size: 60%">Restart</Button></h1>'
    }else if(scomputer==finish&&scomputer>0){
        document.querySelector('.winner').innerHTML='<h1 style="text-align:center; font-size: 200%; color: red; margin:2% 0;">You Lose<br><Button onclick="window.location.reload()" style="background: linear-gradient(rgb(255, 0, 119),rgb(255, 0, 179)); border: none; padding: 1% 2%; font-size: 60%">Restart</Button></h1>'
    }else{
        document.querySelector('.winner').innerHTML='<h1 style="text-align:center; font-size: 100%; color: black; margin:2% 0;">You forgot to set winning point<br><Button onclick="window.location.reload()" style="background: linear-gradient(rgb(255, 0, 119),rgb(255, 0, 179)); border: none; padding: 1% 2%; font-size: 100%">Restart Now</Button></h1>'
    }
};
