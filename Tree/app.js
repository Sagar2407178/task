












function adjustLine(from, to, line){
    var fT = from.offsetTop  + from.offsetHeight;
    var tT = to.offsetTop    + to.offsetHeight;
    var fL = from.offsetLeft + from.offsetWidth/2;
    var tL = to.offsetLeft   + to.offsetWidth/2;
    
    var CA   = Math.abs(tT - fT);
    var CO   = Math.abs(tL - fL);
    var H    = Math.sqrt(CA*CA + CO*CO);
    var ANG  = 180 / Math.PI * Math.acos( CA/H );
  
    if(tT > fT){
        var top  = (tT-fT)/2 + fT;
    }else{
        var top  = (fT-tT)/2 + tT;
    }
    if(tL > fL){
        var left = (tL-fL)/2 + fL;
    }else{
        var left = (fL-tL)/2 + tL;
    }
  
    if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
      ANG *= -1;
    }
    top-= H/2;
    line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
    line.style["-transform"] = 'rotate('+ ANG +'deg)';
    line.style.top    = top+'px';
    line.style.left   = left+'px';
    line.style.height = H + 'px';
  }


    // adjustLine(
    //     document.getElementById('newnode'), 
    //     document.getElementById('child1'),
    //     document.getElementById('line')
    // );

let newnode = document.getElementById('newnode');

newnode.addEventListener("click",addnode.bind(this, ))

let node=1

function addnode(newnode){
    const nd = document.createElement("div");
    nd.id=`child${node}`
    nd.classList.add("node")

    let person = prompt("Please enter your name:");
    let Gender = prompt("Please enter Gender:");


    nd.innerHTML=`<div id="line"></div> 
    <span class="detail">
    <h2>Name: ${person}</h2>
    <h3>Gender:${Gender}</h3></span>
       <div class="node" id="newnode${node}">
                <img src="add.png" class="draggable" alt="" >
                
            </div>
        
    `
    let n= document.querySelector(`newnode${node}`)
   n.addEventListener("click",addnode.bind(this,newnode))
     document.querySelector(".tree").insertBefore(nd,n);

    //  <div id="line${node}"></div>    
    adjustLine(nd,newnode,nd.firstChild);
    adjustLine(nd,newnode,nd.firstChild);

    // adjustLine(
    //     nd, 
    //     document.getElementById('child1'),
    //     document.getElementById('line')
    // );
    node++
}
// addnode()