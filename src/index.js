import HelloWorldButton from './components/hello-world-button/hello-world-btn'
import addImage from './add-image'
import Heading from './components/heading/heading'

const heading = new Heading();
heading.render();
const btnHello = new HelloWorldButton();
btnHello.render();
if(process.env.NODE_ENV=== 'production'){
    console.log('production mode')
}
else if(process.env.NODE_ENV=== 'development'){
    console.log('development mode')
}

// HelloWorldButton.nonExistanceMethod();