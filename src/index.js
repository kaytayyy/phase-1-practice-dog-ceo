console.log('%c HI', 'color: firebrick')
//on page load, fetches the images using the url
document.addEventListener('DOMContentLoaded', ()=>{fetchData})
function fetchData() {
    fetch(imgUrl) , {
        method: "image"
    }
}

//parses the response as `JSON`
.then(res => res.json)

//adds image elements to the DOM **for each** 🤔 image in the array