

class HelloWorldButton{
    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Hello World!'
        // setTimeout(function(){
            const body = document.querySelector('body');
            console.log(body)
            body.appendChild(button)
        // }, 500)
    }
}

export default HelloWorldButton;