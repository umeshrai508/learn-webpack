import HelloWorldButton from './components/hello-world-button/hello-world-btn'
import addImage from './add-image'

const btnHello = new HelloWorldButton();
btnHello.render();
// helloWorld();
setTimeout(function(){
    addImage();

}, 100)