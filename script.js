let leftButton = document.getElementById('leftButton')
let rightButton = document.getElementById('rightButton')
let dist = 0;
let slider = document.getElementsByClassName('slider')[0];
let rightComment = document.getElementById('rightComment')
let leftComment = document.getElementById('leftComment')
let pairs = document.getElementsByClassName('pair')
console.log(pairs);

rightButton.onclick = function(){
    dist= dist-100;
    console.log(leftButton);
    dist = dist == -100 ? 200: dist;
    console.log(dist);
    slider.style.transform='translateX(-'+dist+'%)';
}
leftButton.onclick = function(){
    dist= (dist+100)%(slider.children.length*100);
    console.log(rightButton);
    console.log(dist);
    slider.style.transform='translateX(-'+dist+'%)'
}


rightComment.onclick = function(){
    console.log(7);
    let activePair=document.getElementsByClassName('activePair')[0];
    let nextPair;

    if(activePair.nextElementSibling){
        nextPair=activePair.nextElementSibling;
    }
    else{
        nextPair = pairs[0];
    }
    activePair.classList.remove('activePair')
    nextPair.classList.add('activePair')


}

leftComment.onclick = function(){
    console.log(2);
    let activePair=document.getElementsByClassName('activePair')[0];
    let previousPair;
    console.log(activePair.previousElementSibling);

    if(activePair.previousElementSibling){
        console.log(5);
        previousPair=activePair.previousElementSibling;
    }
    else{
        previousPair=pairs[pairs.length-1];
    }
    activePair.classList.remove('activePair')
    previousPair.classList.add('activePair')

}

