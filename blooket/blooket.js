function code() {    
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
    let element = document.createElement('div');

    element.style = `font-family: sans-serif; font-size: 20px; width: 175px; background: #101010; color: #f5f6f7; position: absolute; border-radius: 10px; text-align: center`;
    element.innerHTML = `<p>Find more at <a style="color: #f5f6f7;" href="https://nvshs.github.io/" target="_blank">nvshs.github.io</a></p>`;
    document.body.appendChild(element);
    function footer() {
    };
}
code();
