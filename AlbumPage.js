const mouseoverSong = function () {
    songNode = document.getElementsByClassName('song')
    numNode = document.getElementsByClassName('listNumber')
    heartNode = document.getElementsByClassName('heartSong')
    threeDotsNode = document.getElementsByClassName('threeDotsSong')
    for (let i = 0; i < songNode.length; i++) {
      songNode[i].addEventListener('mouseover', function (e) {
        songNode[i].classList.add('highLighting')
        numNode[i].innerText = ' '
        numNode[i].classList.add('listPlay')
        heartNode[i].classList.remove('hidden')
        threeDotsNode[i].classList.remove('hidden')
      })
      songNode[i].addEventListener('mouseleave', function (e) {
        songNode[i].classList.toggle('highLighting')
        numNode[i].innerText = i + 1
        numNode[i].classList.toggle('listPlay')
        heartNode[i].classList.add('hidden')
        threeDotsNode[i].classList.add('hidden')
      })
    }
  }
  mouseoverSong()


const artist1 = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem"
const artist2 = "https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica"
const artist3 = "https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth"

  
    const myfunc = function(artistVar){
  fetch(artistVar, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": 
	}
})
.then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      const songArr = data.data
      
      const songFunc = function(){
        const artistContainerNode = document.getElementById("hereWeGo")

      }
    })
    .catch(error => console.warn(error));
}

