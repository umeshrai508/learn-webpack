import Kiwi from '../img/bhale.jpg'
console.log(Kiwi)
function addImage(){
    const image = document.createElement('img');
    image.alt ='Kiwi';
    image.width ='300';
    image.src = Kiwi;
    let body = document.getElementsByTagName('body');
    console.log(body)
    body[0].appendChild(image)
}

export default addImage;