let teamTitle = document.getElementsByTagNameNS('h3');
let time = document.getElementsByTagNameNS('h4')
let USA = document.getElementsByTagNameNS('h2')
function widthText() {
    console.log(78);
    console.log(teamTitle);
    console.log(time);

    if(teamTitle.style.color='green'){
        
    time.style.offsetColor='red';
    }
    else{
        USA.style.color='yellow'
    }

}