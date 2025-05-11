// when document is loaded show print effect
document.addEventListener("DOMContentLoaded", function () {
    const lines = [
      "Hi there! My name is Edward Okeyo Obala. A techie, a current and future change maker and a techpreneur.",
      "I am a Software engineer and Data scientist by profession and practice looking to change the world through the use of technology.",
      "I write blogs, make videos, run social ventures and have fun while doing it."
    ];

    const container = document.getElementById("my-name");
    let currentLine = 0;

    function typeNextLine() {
      if (currentLine >= lines.length) return;

      const p = document.createElement("p");
      container.appendChild(p);

      new Typed(p, {
        strings: [lines[currentLine]],
        typeSpeed: 10,
        showCursor: false,
        onComplete: () => {
          currentLine++;
          setTimeout(typeNextLine, 500); // Wait before typing the next line
        }
      });
    }

    typeNextLine();
  });

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
        cursorChar: '_',
        onComplete: () => {
          setTimeout(() => {
            const cursor = document.querySelector(`#${fullId} + .typed-cursor`);
            if (cursor) cursor.remove();
          }, 1000);
        }
      });
      

    if(element == 'experience-body'){
        await sleep(10000);
    }else{
        await sleep(1000);
    }
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
        // resize column to full length
        // get rid of testimonial column
    } else {
        div.hidden = true;
        div.innerHTML = '';
        return;
    }

    printText();
    console.log("Completed type effect");
}
