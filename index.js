
simple_arr=[0,1,2,3,4,5,0,1,2,3,4,5];
scan_arr=[];
sorted_arr=[];
replace=[];
disable_arr=[];
var xal=0;
var tryagain=0;
function randGenerator()
{
    let tbl="",randNum=0,count=0;
    for (let i=0;i<3;i++){
        tbl+="<tr>";
        for (let j=0;j<4;j++)
        {
           randNum= Math.floor(Math.random() * simple_arr.length);
           let num=simple_arr[randNum];
           tbl+=`<td onclick='scanCouples(${num},${count})'>
           <img src=img/${num}.png />
           
           </td>`;
           sorted_arr.push(num);
           simple_arr.splice(randNum,1);
           count++;
           
         
        }

        tbl+="</tr>";
    }
    

    document.getElementsByTagName("table")[0].innerHTML=tbl;
    console.table(sorted_arr);

}

function startGame(){
    
    let tbl="",count=0;num=0, x="b",t="t";
    for (let i=0;i<3;i++){
        tbl+="<tr>";
        for (let j=0;j<4;j++)
        {
         
           tbl+=`<td id="${t}${count}" onclick='scanCouples(${num},${count})'>
           <img src=img/${sorted_arr[num]}.png />
           <img id="${x}${count}" src=img/whichone.jpg />
           </td>`;
         
           count++;
           num++;
           
         
        }

        tbl+="</tr>";
    }
    document.getElementsByTagName("table")[0].innerHTML=tbl;
    console.table(sorted_arr);

}



function scanCouples(num,count){
   let x="b",t="t";
   tryagain++;
   scan_arr.push(sorted_arr[num]);
   replace.push(count);
   let imgA=document.getElementById(`${x}${count}`);
   imgA.style.visibility="hidden";
   if(scan_arr.length==2&&replace.length==2){
      if(scan_arr[0]==scan_arr[1]){
          
        
          console.log("good");
          let tdA=document.getElementById(`${t}${replace[0]}`);
          let tdB=document.getElementById(`${t}${replace[1]}`);
          disable_arr.push(replace[0]);
          disable_arr.push(replace[1]);
          tdA.style.pointerEvents = 'none';
          tdB.style.pointerEvents = 'none';
          xal++;
          scan_arr=[];
          replace=[];
         
         
      }
      else{


           disableButtons();
            setTimeout(() => {
                let imgA=document.getElementById(`${x}${replace[0]}`);
                let imgB=document.getElementById(`${x}${replace[1]}`);
                imgA.style.visibility="visible";
                imgB.style.visibility="visible";
                scan_arr=[];
                replace=[];
                enableButtons();

            }, 1300);
           
            
           
      }
   }
   if(xal==6){
      setTimeout(() => {
        let sinaq=Math.abs(tryagain/2);
        alert(`Təbrik edirəm ${sinaq} dəfədə bitirdin `);
      }, 130);
    
   }

}

function disableButtons(){
      let t="t"
      for(let i=0;i<12;i++){
          document.getElementById(`${t}${i}`).style.pointerEvents = 'none';
      }
}

function enableButtons(){

    let t="t"
    for(let i=0;i<12;i++){
      
        document.getElementById(`${t}${i}`).style.pointerEvents = 'auto';
        
    }
    for(let i=0;i<disable_arr.length;i++){
      
        document.getElementById(`${t}${disable_arr[i]}`).style.pointerEvents = 'none';
        
    }
}


window.onload=function(){
    this.randGenerator();
    this.setTimeout(this.startGame,1500);
    
 }










