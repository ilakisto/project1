document.addEventListener("DOMContentLoaded", function() {

// МАЛЕНЬКИЕ ЛИСТОЧКИ //
let sleaf1=document.getElementById("sleaf1");
let observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf1.classList.add("fall1");
        observer.unobserve(sleaf1);
    }
    });
});

observer.observe(sleaf1);

let sleaf2=document.getElementById("sleaf2");
let observer1=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf2.classList.add("fall2");
        observer1.unobserve(sleaf2);
    }
    });
});

observer1.observe(sleaf2);

let sleaf3=document.getElementById("sleaf3");
let observer2=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf3.classList.add("fall3");
        observer2.unobserve(sleaf3);
    }
    });
});

observer2.observe(sleaf3);

let sleaf4=document.getElementById("sleaf4");
let observer3=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf4.classList.add("fall4");
        observer3.unobserve(sleaf4);
    }
    });
});

observer3.observe(sleaf4);

let sleaf5=document.getElementById("sleaf5");
let observer4=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf5.classList.add("fall5");
        observer4.unobserve(sleaf5);
    }
    });
});

observer4.observe(sleaf5);

let sleaf6=document.getElementById("sleaf6");
let observer5=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf6.classList.add("fall6");
        observer5.unobserve(sleaf6);
    }
    });
});

observer5.observe(sleaf6);

let sleaf7=document.getElementById("sleaf7");
let observer6=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf7.classList.add("fall7");
        observer6.unobserve(sleaf7);
    }
    });
});

observer6.observe(sleaf7);
// МАЛЕНЬКИЕ ЛИСТОЧКИ //

// ИГРА С ПОМИДОРКАМИ //

let openTomato = document.getElementById("tomatoGame");
let popup1 = document.getElementById("popup1");
let close1 = document.getElementById("closePopup1");

openTomato.addEventListener("click", function(){
    popup1.style.display="block";
});
close1.addEventListener("click", function(){
    popup1.style.display="none";
    resetTomGame()
});


const can = document.getElementById('can');
const canActive = document.getElementById('canActive');

if (can && canActive) {
  let isDragging = false;
  can.draggable = false;

  can.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    
    can.style.opacity = '0';
    canActive.style.opacity = '1';
    canActive.style.position = 'fixed';
    canActive.style.marginLeft = '0';
    canActive.style.marginTop = '0';
    canActive.style.left = e.clientX - canActive.offsetWidth / 2 + 'px';
    canActive.style.top = e.clientY - canActive.offsetHeight / 2 + 'px';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    canActive.style.left = e.clientX - canActive.offsetWidth / 2 + 'px';
    canActive.style.top = e.clientY - canActive.offsetHeight / 2 + 'px';
  });

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    can.style.opacity = '1';
    canActive.style.opacity = '0';
    canActive.style.left = '';
    canActive.style.top = '';
    canActive.style.position = '';
    canActive.style.marginLeft = '';
    canActive.style.marginTop = '';
  };

  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('mouseleave', stopDrag);
}

document.addEventListener('mousemove', (e) => {
  const canActive = document.getElementById('canActive');
  const plant1Small = document.getElementById('plant1Small');
  const plant1Big = document.getElementById('plant1Big');
  
  if (!canActive || !plant1Small || !plant1Big) return;
  if (canActive.style.opacity !== '1') return;
  
  let r1 = canActive.getBoundingClientRect();
  let r2 = plant1Small.getBoundingClientRect();
  
  if (r1.left < r2.right && r1.right > r2.left && 
      r1.top < r2.bottom && r1.bottom > r2.top) {
    plant1Small.style.display = 'none';
    plant1Big.style.display = 'block';
  }
});

function resetTomGame(){
    plant1Big.style.display = "none";
    plant1Small.style.display = "block";
}
// ИГРА С ПОМИДОРКАМИ //



// МАЛЕНЬКИЕ ЛИСТОЧКИ //
let sleaf8=document.getElementById("sleaf8");
let observer7=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf8.classList.add("fall8");
        observer7.unobserve(sleaf8);
    }
    });
});

observer7.observe(sleaf8);
// МАЛЕНЬКИЕ ЛИСТОЧКИ //


// ИГРА С ЯБЛОКАМИ //
let openApple = document.getElementById("appleGame");
let popup2 = document.getElementById("popup2");
let close2 = document.getElementById("closePopup2");
let plant2Win = document.getElementById("plant2Win");

let apples = document.querySelectorAll(".apple");
let worm = document.getElementById("worm");

let applesLeft = apples.length;

openApple.addEventListener("click", function(){
    popup2.style.display="block";
});
close2.addEventListener("click", function(){
    popup2.style.display="none";
    resetApplGame()
});


apples.forEach(function(apple){
      apple.addEventListener("click", function(){
        if(apple.style.display === "none") return;
        apple.style.display = "none";
        applesLeft--;

        checkApplWin();
    });
});


if(worm){
worm.addEventListener("click", function(){
    worm.classList.toggle("big");
    worm.style.transition = "2s ease-in-out";

    setTimeout(function(){
       resetApplGame()
    }, 1000);
});
};


function checkApplWin(){
    if(applesLeft <= 0){
       plant2Win.style.display = "block";

    if(worm){
       worm.style.opacity = "0";
    };
    };
};

function resetApplGame(){
    apples.forEach(function(a) {
       a.style.display = "block";
    });

    worm.style.display = "block";
    worm.style.opacity = "1";
    worm.classList.remove("big");

    plant2Win.style.display = "none";

    applesLeft = apples.length;
};


// ИГРА С ЯБЛОКАМИ //

// ИГРА С ТЫКВОЙ //

let openPumpkin = document.getElementById("pumpkinGame");
let popup3 = document.getElementById("popup3");
let close3 = document.getElementById("closePopup3");
let plant3Win = document.getElementById("plant3Win");

let pencil = document.querySelector(".pen");
let drawArea = document.getElementById("canvas");
let goodpum = document.querySelector(".goodpum");


let canDraw = false;
let isDrawing = false;
let painted = 0;

openPumpkin.addEventListener("click", function(){
    popup3.style.display="block";
});
close3.addEventListener("click", function(){
    popup3.style.display="none";
    resetPumGame();
});

pencil.addEventListener("click", function(){
    canDraw = true;
});

drawArea.addEventListener("mousedown", function(){
    if(!canDraw) return;
    isDrawing = true;
});

document.addEventListener("mouseup", function(){
    isDrawing = false;
});

drawArea.addEventListener("mousemove", (e)=>{
    if(!isDrawing) return;

    let rect = drawArea.getBoundingClientRect();

    let dot = document.createElement("div");
    dot.className = "dot";

    dot.style.left = (e.clientX - rect.left) + "px";
    dot.style.top = (e.clientY - rect.top) + "px";

    drawArea.parentElement.appendChild(dot);

    painted++;

    checkPumWin();
});

function checkPumWin(){
    if(painted>1000){
        plant3Win.style.display = "block";
    };
};
// ИГРА С ТЫКВОЙ //



// МАЛЕНЬКИЕ ЛИСТОЧКИ //
let sleaf9=document.getElementById("sleaf9");
let observer8=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf9.classList.add("fall9");
        observer8.unobserve(sleaf9);
    }
    });
});

observer8.observe(sleaf9);

let sleaf10=document.getElementById("sleaf10");
let observer9=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf10.classList.add("fall10");
        observer9.unobserve(sleaf10);
    }
    });
});

observer9.observe(sleaf10);

let sleaf11=document.getElementById("sleaf11");
let observer10=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf11.classList.add("fall11");
        observer10.unobserve(sleaf11);
    }
    });
});

observer10.observe(sleaf11);

let sleaf12=document.getElementById("sleaf12");
let observer11=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf12.classList.add("fall12");
        observer11.unobserve(sleaf12);
    }
    });
});

observer11.observe(sleaf12); 

let sleaf13=document.getElementById("sleaf13");
let observer12=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf13.classList.add("fall13");
        observer12.unobserve(sleaf13);
    }
    });
});

observer12.observe(sleaf13); 

let sleaf14=document.getElementById("sleaf14");
let observer13=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf14.classList.add("fall14");
        observer13.unobserve(sleaf14);
    }
    });
});

observer13.observe(sleaf14); 

let sleaf15=document.getElementById("sleaf15");
let observer14=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf15.classList.add("fall15");
        observer14.unobserve(sleaf15);
    }
    });
});

observer14.observe(sleaf15); 
// МАЛЕНЬКИЕ ЛИСТОЧКИ //




// ИГРА БАКЛАЖАН //
let openEggplant = document.getElementById("eggplantGame");
let popup4 = document.getElementById("popup4");
let close4 = document.getElementById("closePopup4");

openEggplant.addEventListener("click", function(){
    popup4.style.display = "block";
});
close4.addEventListener("click", function(){
    popup4.style.display = "none";
    resetEggplGame()
});

let pieces = document.querySelectorAll(".piece");
let win = document.getElementById("win");

let rotations = new Array(8).fill(0);
let correctRotation = [270, 270, 0, 270, 0, 90, 180, 270];

pieces.forEach((piece, index) => {
    piece.addEventListener("click", function (){
    if(rotations[index] === correctRotation[index]){
        return;
    };
    rotations[index] += 90;
    piece.style.transform = `rotate(${rotations[index]}deg)`;
    checEggplkWin();
});

});

function checEggplkWin(){
    let solved = true;
    for(let m=0; m < rotations.length; m++){

        if(rotations[m] !== correctRotation[m]){
            solved = false;
            break;
        };
    };

    if(solved){
        win.style.display = "block";
    };
};
// ИГРА БАКЛАЖАН //



// МАЛЕНЬКИЕ ЛИСТОЧКИ //
let sleaf16=document.getElementById("sleaf16");
let observer15=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf16.classList.add("fall16");
        observer15.unobserve(sleaf16);
    }
    });
});

observer15.observe(sleaf16); 


let sleaf17=document.getElementById("sleaf17");
let observer16=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf17.classList.add("fall17");
        observer16.unobserve(sleaf17);
    }
    });
});

observer16.observe(sleaf17); 


let sleaf18=document.getElementById("sleaf18");
let observer17=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf18.classList.add("fall18");
        observer17.unobserve(sleaf18);
    }
    });
});

observer17.observe(sleaf18); 


let sleaf19=document.getElementById("sleaf19");
let observer18=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf19.classList.add("fall19");
        observer18.unobserve(sleaf19);
    }
    });
});

observer18.observe(sleaf19); 


let sleaf20=document.getElementById("sleaf20");
let observer19=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf20.classList.add("fall20");
        observer19.unobserve(sleaf20);
    }
    });
});

observer19.observe(sleaf20); 

let sleaf21=document.getElementById("sleaf21");
let observer20=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf21.classList.add("fall21");
        observer20.unobserve(sleaf21);
    }
    });
});

observer20.observe(sleaf21); 

let sleaf22=document.getElementById("sleaf22");
let observer21=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf22.classList.add("fall22");
        observer21.unobserve(sleaf22);
    }
    });
});

observer21.observe(sleaf22); 


let sleaf23=document.getElementById("sleaf23");
let observer22=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf23.classList.add("fall23");
        observer22.unobserve(sleaf23);
    }
    });
});

observer22.observe(sleaf23); 


let sleaf24=document.getElementById("sleaf24");
let observer23=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf24.classList.add("fall24");
        observer23.unobserve(sleaf24);
    }
    });
});

observer23.observe(sleaf24);

let sleaf25=document.getElementById("sleaf25");
let observer24=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf25.classList.add("fall25");
        observer24.unobserve(sleaf25);
    }
    });
});

observer24.observe(sleaf25);

let sleaf26=document.getElementById("sleaf26");
let observer25=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf26.classList.add("fall26");
        observer25.unobserve(sleaf26);
    }
    });
});

observer25.observe(sleaf26);


let sleaf27=document.getElementById("sleaf27");
let observer26=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf27.classList.add("fall27");
        observer26.unobserve(sleaf27);
    }
    });
});

observer26.observe(sleaf27);

let sleaf28=document.getElementById("sleaf28");
let observer27=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf28.classList.add("fall28");
        observer27.unobserve(sleaf28);
    }
    });
});

observer27.observe(sleaf28);

let sleaf29=document.getElementById("sleaf29");
let observer28=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf29.classList.add("fall29");
        observer28.unobserve(sleaf29);
    }
    });
});

observer28.observe(sleaf29);

let sleaf30=document.getElementById("sleaf30");
let observer29=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf30.classList.add("fall30");
        observer29.unobserve(sleaf30);
    }
    });
});

observer29.observe(sleaf30);

let sleaf31=document.getElementById("sleaf31");
let observer30=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf31.classList.add("fall31");
        observer30.unobserve(sleaf31);
    }
    });
});

observer30.observe(sleaf31);

let sleaf32=document.getElementById("sleaf32");
let observer31=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
        sleaf32.classList.add("fall32");
        observer31.unobserve(sleaf32);
    }
    });
});

observer31.observe(sleaf32);


// МАЛЕНЬКИЕ ЛИСТОЧКИ //

});