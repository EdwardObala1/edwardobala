// when document is loaded show print effect
document.addEventListener("DOMContentLoaded", function () {
    const lines = [
      "Hi there! My name is Edward Okeyo Obala. A techie, a current and future change maker and a techpreneur.",
      "I am a Software engineer and Data scientist by profession and practice looking to change the world through the use of technology.",
      "I write blogs, make videos, run social ventures and have fun while doing it."
    ];

    const container = document.getElementById("my-elevator-pitch");
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
    let textElement = (element.includes("title")) ? 'h6' : 'p';

    let newElement = document.createElement(textElement);
    newElement.id = fullId;
    newElement.style.color = 'black';
    newElement.style.fontSize = 'small';

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
      

    // if(element == 'experience-body'){
    //     await sleep(10000);
    // }else{
    //     await sleep(1000);
    // }
    await sleep(1000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printExperienceText(){
    let experienceTitles = Array.from(document.querySelectorAll('#experience-title')).map(el => el.textContent);
    let experienceDesc = Array.from(document.querySelectorAll('#experience-desc')).map(el => el.textContent);
    // let experienceBodies = Array.from(document.querySelectorAll('#experience-points')).map(el => el.textContent);

    const targetSection = document.getElementById('experience-section');
    let entryCount = experienceTitles.length;
    // create button
    const button = document.createElement("buttom");
    button.className = "btn btn-dark border-0";
    button.innerHTML = 'See More Details';
    button.style.borderRadius = '0px';
    button.addEventListener('click', function() {
        window.location.href = 'html/experience.html';
    });

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
        // await typeEffect(entryDiv, 'experience-body', experienceBodies[i], i);
    }

    // add the button
    targetSection.appendChild(button); // Add wrapper to section
}

function printExperience() {
    var div = document.getElementById('experience-section');
    if (div.hidden) {
        div.hidden = false;
    } else {
        div.hidden = true;
        div.innerHTML = '';
        return;
    }

    printExperienceText();
    console.log("Completed type effect");
}

async function printEducationText() {
  let educationTitles = Array.from(document.querySelectorAll('#education-title')).map(el => el.innerHTML);
  let educationDesc = Array.from(document.querySelectorAll('#education-desc')).map(el => el.innerHTML);
  let educationLists = Array.from(document.querySelectorAll('#education-points')).map(el => el.cloneNode(true));

  const targetSection = document.getElementById('education-section');
  let entryCount = educationTitles.length;

  for (let i = 0; i < entryCount; i++) {
    let entryDiv = document.createElement('div');
    entryDiv.className = 'education-entry';
    entryDiv.id = `education-entry-${i}`;
    entryDiv.style.marginBottom = '10px';
    entryDiv.style.marginTop = '10px';
    targetSection.appendChild(entryDiv);

    await typeEffect(entryDiv, 'education-title', educationTitles[i], i);
    await typeEffect(entryDiv, 'education-desc', educationDesc[i], i);

    // now handle the list properly
    let list = educationLists[i];
    list.hidden = false;
    list.id = `education-body-${i}`;
    entryDiv.appendChild(list);
  }

  targetSection.appendChild(button);
}


function printEducation() {
    var div = document.getElementById('education-section');
    if (div.hidden) {
        div.hidden = false;
    } else {
        div.hidden = true;
        div.innerHTML = '';
        return;
    }

    printEducationText();
    console.log("Completed type effect");
}

async function printSkillsText() {
  let skillsTitles = Array.from(document.querySelectorAll('#skills-title')).map(el => el.innerHTML);
  // let skillsDesc = Array.from(document.querySelectorAll('#skills-desc')).map(el => el.innerHTML);
  let skillsLists = Array.from(document.querySelectorAll('#skills-points')).map(el => el.cloneNode(true));

  const targetSection = document.getElementById('skills-section');
  let entryCount = skillsTitles.length;

  for (let i = 0; i < entryCount; i++) {
    let entryDiv = document.createElement('div');
    entryDiv.className = 'skills-entry';
    entryDiv.id = `skills-entry-${i}`;
    entryDiv.style.marginBottom = '10px';
    entryDiv.style.marginTop = '10px';
    targetSection.appendChild(entryDiv);

    await typeEffect(entryDiv, 'skills-title', skillsTitles[i], i);
    // await typeEffect(entryDiv, 'skills-desc', skills[i], i);

    // now handle the list properly
    let list = skillsLists[i];
    list.hidden = false;
    list.id = `skills-body-${i}`;
    entryDiv.appendChild(list);
  }

  targetSection.appendChild(button);
}


function printSkills() {
    console.log("Debug line");
    var div = document.getElementById('skills-section');
    if (div.hidden) {
        div.hidden = false;
    } else {
        div.hidden = true;
        div.innerHTML = '';
        return;
    }

    printSkillsText();
    console.log("Completed type effect");
}

function redirectToContactPage(){
  window.location.replace('html/contacts.html')
}