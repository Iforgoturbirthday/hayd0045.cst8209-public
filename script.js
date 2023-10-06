function setTitle(s){
    document.getElementById("pageTitle").textContent = s;
    console.log(`The page title has been updated to ${s} sucessfully.`);
}

function setBackgroundColor(s){
    document.body.style.backgroundColor = s;
    console.log(`The background color has been changed to ${s} sucessfully.`);
}

function setFontColor(s){
    document.body.style.color = s;
    console.log(`The font color has been changed to ${s} sucessfully.`);
}

function setTheme(s){
    document.body.className = s;
    if (s !== 'theme1' && s !== 'theme2' && s !== 'theme3') {
        console.log(`Not a valid theme`)
    } else {
        console.log(`The theme has been changed to ${s} sucessfully.`) 
    }
}