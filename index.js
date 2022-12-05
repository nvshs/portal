import * as list from "./sites.json"

try{
    for(let i = 0; i < list.lenght; i++) {
        const div = document.createElement('div');
        const status = "";

        if(list[i].info.blocked == false) {
            status = "Unblocked";
        } if(list[i].info.blocked == true) {
            status = "Blocked";
        } if(list[i].info.risk == true) {
            status += " <b>Use at own risk</b>"
        }

        div.className = 'web';
    
        div.innerHTML = `
        <h2 class="web-text">${list[i]}</h2>
        <div>
            <h3 class="web-text"><a href="${list[i].link}" target="_blank">${list[i]} link</a></h3>
            <p class="web-text">
                Status - ${status}
                Class - ${list[i].info.class}
            </p>
        </div>
        `;
    
        document.getElementById('content').appendChild(div);
        setTimeout(500, function(){console.log("Loaded: " + list[i])})
    }
} catch(err) {
    console.error(`Error when loading sites:\n${err}`)
}
