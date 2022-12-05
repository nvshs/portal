fetch("./sites.json")
.then(response => {return response.json();})
.then(data => 
    data.forEach(site => {
        const div = document.createElement('div');
        const status = "";

        if(site[i].info.blocked == false) {
            status = "Unblocked";
        } if(site[i].info.blocked == true) {
            status = "Blocked";
        } if(site[i].info.risk == true) {
            status += " <b>Use at own risk</b>"
        }

        div.className = 'web';
    
        div.innerHTML = `
        <h2 class="web-text">${site[i]}</h2>
        <div>
            <h3 class="web-text"><a href="${site[i].link}" target="_blank">${site[i]} link</a></h3>
            <p class="web-text">
                Status - ${status}
                Class - ${site[i].info.class}
            </p>
        </div>
        `;
    
        document.getElementById('content').appendChild(div);
        setTimeout(250, function(){console.log("Loaded: " + site[i])})
    }
));
