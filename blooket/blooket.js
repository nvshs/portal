(()=>{
    function getStateNode(){
    for(let i of Object.keys(document.querySelector("#app>div>div"))){
        if(i.toString().includes("__reactEventHandlers")){
            for(let p of Object.values(document.querySelector("#app>div>div")[i].children.filter(n=>n))){
                if(p._owner&&p._owner.stateNode)return p._owner.stateNode
            }
        }
    }
}
    window.setInterval(()=>{
    try{
        getStateNode().state.question.correctAnswers = getStateNode().state.question.answers
    }catch {
        
    }
});
})();

function footer() {
    let element = document.createElement('div');

    element.style = `font-family: sans-serif; font-size: 20px; width: 175px; background: #101010; color: #f5f6f7; position: absolute; border-radius: 10px; text-align: center`;
    element.innerHTML = `<p>Find more at <a style="color: #f5f6f7;" href="https://nvshs.github.io/" target="_blank">nvshs.github.io</a></p>`;
    document.body.appendChild(element);
    
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = ((e = window.event) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = ((e) => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
            let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
            element.style.top = top + "px";
            element.style.left = left + "px";
        });
    });
};

footer();
