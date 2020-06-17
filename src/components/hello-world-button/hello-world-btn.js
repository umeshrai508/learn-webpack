import './style.scss'

class HelloWorldButton {
    buttonCssClass = 'hello-world-btn';
    textCssClass = 'hello-world-txt';
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World!'
        button.classList.add(this.buttonCssClass) 
        button.onclick = ()=>{
            const p = document.createElement('p');
            p.innerHTML = 'Hello World'
            p.classList.add(this.textCssClass) 
            body.appendChild(p)
        }
        const body = document.querySelector('body');
        console.log(body)
        body.appendChild(button)
    }
}

export default HelloWorldButton;