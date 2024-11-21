'use strict'

// задавалово

let body = document.querySelector('body');
let currentIndex = 0;
let waitTimer = null;
let ad = document.getElementById('ad');
let boolForAD = false;
let adIsVisiable = false;

// ФУнкции

function getOffset(elem) {
    let rect = elem.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX
    };
}

function centerJumpingBlock(target) {
    let jumpingBlock = document.getElementById('jumpingBlock');
    
    if (target) {
        let targetOffset = getOffset(target);

        let jumpingBlockWidth = jumpingBlock.offsetWidth;

        let jumpingBlockHeight = jumpingBlock.offsetHeight;

        let left = targetOffset.left + (target.offsetWidth/2) - (jumpingBlockWidth/2);
        
        let top = targetOffset.top + (target.offsetHeight/2) - (jumpingBlockHeight/2);
    
        jumpingBlock.style.left = `${left}px`;
        
        jumpingBlock.style.top = `${top}px`;
    }
}
function checkScroll() {
    let targets = document.querySelectorAll('.targetBlock');

    if(currentIndex < targets.length){
        let targetOffset = getOffset(targets[currentIndex]);

        if (targetOffset.top <= window.scrollY + window.innerHeight && targetOffset.top + targets[currentIndex].offsetHeight > window.scrollY) {
            centerJumpingBlock(targets[currentIndex]);
            currentIndex++;
        }

    }

    if (currentIndex > 0) {
        let prevTarget = targets[currentIndex - 1];
        let prevTargetOffset = getOffset(prevTarget);

        if (prevTargetOffset.top - prevTarget.offsetHeight > window.scrollY) {
            currentIndex--;
            centerJumpingBlock(targets[currentIndex]);
        }
    }
    var windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
    let currentActivesBlocks = 0;
    targets.forEach(target => {
        var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        }
        if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom && targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) {
            console.log('Вы видите элемент :)');
            currentActivesBlocks++;
          }
    });
    if (currentActivesBlocks > 1) {
        boolForAD = true;
    }
    else{
        boolForAD = false;
    }

}

function updateJumpingBlockPosition() {
    let targets = document.querySelectorAll('.targetBlock');
    centerJumpingBlock(targets[currentIndex]);
}

function resetInactivityTimer(){
    checkScroll;

    clearTimeout(waitTimer);
    if (adIsVisiable == true) {
        adIsVisiable = false;
        ad.style.animationName = 'adRight';
        ad.style.animationDuration = '2s';
        ad.style.left = '100%';
    }
    if (!boolForAD) {
        waitTimer = setTimeout(()=>{
            //код на 2 сек бездействия
            ad.style.animationName = 'adLeft';
            ad.style.animationDuration = '2s';
            ad.style.left = '80%';
            adIsVisiable = true;
            //ad.style.transform = `translate(-900px,0px)`;
    
        },2000);
    }
}

// скрипт

window.onload = updateJumpingBlockPosition;
window.onresize = updateJumpingBlockPosition;
window.onscroll = checkScroll;


window.addEventListener('mousemove', resetInactivityTimer);
window.addEventListener('scroll', resetInactivityTimer);
window.addEventListener('click', resetInactivityTimer);
window.addEventListener('keydown', resetInactivityTimer);
