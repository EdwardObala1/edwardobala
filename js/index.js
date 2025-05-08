function printExperience() {
    // make div appear
    var div = document.getElementById('experience-section')
    // toggle its appearance
    if (div.hidden){
        div.hidden = false;
    }else{
        div.hidden = true;
        div.innerHTML = '';
        return;
    }
    // once the div appears show a blinking cursor sleep for .5 second
    // start typing effect

    printText();
    console.log("Completed type effect");
    return;
}
  

async function typeEffect(element, text, id){
    // target div
    let targetDiv = document.getElementById('experience-section');
    element = element + id;

    let newElement = document.createElement('h5');
    newElement.id = element;
    newElement.style.color = 'black';
    targetDiv.appendChild(newElement);
    
    var typed = new Typed("#" + element, {
        strings: [text],
        typeSpeed: 100,
      });

    await sleep(2000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function printText(){
    let experienceTitles = Array.from(document.querySelectorAll('#experience-title')).map(el => el.textContent);
    let experienceDesc = Array.from(document.querySelectorAll('#experience-desc')).map(el => el.textContent);
    let experienceBodies = Array.from(document.querySelectorAll('#experience-points')).map(el => el.textContent);

    console.log('test');
    // get length of how many entries there are
    entryCount = experienceTitles.length;

    // loop through entry count and print each of those in a typed manner
    for(let i = 0; i < entryCount; i++){
        // for the titles
        typeEffect('experience-title', experienceTitles[i], i);
        typeEffect('experience-desc', experienceDesc[i], i);
        typeEffect('experience-body', experienceBodies[i], i);
    }
    // complete function
    return;
}