console.log('%c HI', 'color: firebrick')
//on page load, fetches the images using the url
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const baseUrl = 'http://localhost:3000/'
const profileUrl = baseUrl + 'profile'

const fetchImg = () =>
fetch(imgUrl)
.then(r = r.json())
.then(imgData => renderImg(imgData))

fetchImg()

const renderImg = images => {
    render img
}