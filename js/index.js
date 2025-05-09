async function typeEffect(targetDiv, element, text, id){
    let fullId = element + id;
    let textElement = (element.includes("title")) ? 'h5' : 'p';

    let newElement = document.createElement(textElement);
    newElement.id = fullId;
    newElement.style.color = 'black';

    if (element.includes("desc")) {
        newElement.style.fontStyle = 'italic';
    }

    targetDiv.appendChild(newElement);

    var typed = new Typed("#" + fullId, {
        strings: [text],
        typeSpeed: 1,
        showCursor: true,
        onComplete: () => {
            const cursor = document.querySelector(`#${fullId} + .typed-cursor`);
            if (cursor) cursor.remove();
        }
    });

    await sleep(2000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printText(){
    let experienceTitles = Array.from(document.querySelectorAll('#experience-title')).map(el => el.textContent);
    let experienceDesc = Array.from(document.querySelectorAll('#experience-desc')).map(el => el.textContent);
    let experienceBodies = Array.from(document.querySelectorAll('#experience-points')).map(el => el.textContent);

    const targetSection = document.getElementById('experience-section');
    let entryCount = experienceTitles.length;

    for(let i = 0; i < entryCount; i++){
        // Create a container div for each experience block
        let entryDiv = document.createElement('div');
        entryDiv.className = 'experience-entry';
        entryDiv.id = `experience-entry-${i}`;
        entryDiv.style.marginBottom = '10px';
        entryDiv.style.marginTop = '10px';
        entryDiv.style.border = 'solid';

        targetSection.appendChild(entryDiv); // Add wrapper to section

        // Now call typeEffect passing the wrapper as the target
        await typeEffect(entryDiv, 'experience-title', experienceTitles[i], i);
        await typeEffect(entryDiv, 'experience-desc', experienceDesc[i], i);
        await typeEffect(entryDiv, 'experience-body', experienceBodies[i], i);
    }
}

function printExperience() {
    var div = document.getElementById('experience-section');
    if (div.hidden) {
        div.hidden = false;
    } else {
        div.hidden = true;
        div.innerHTML = ''; // Clear it when hiding
        return;
    }

    printText();
    console.log("Completed type effect");
}
