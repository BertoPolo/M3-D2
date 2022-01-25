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
		"x-rapidapi-key": "cb01c22bd6msh0e8a97b3657aa1dp1c7f88jsn8d14e22972be"
	}
})
.then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      const song = function(){
        
      }
    })
    .catch(error => console.warn(error));
}

