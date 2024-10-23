
// https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ftb/artists

const renderArtists = async () => {

const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ftb/artists`)
const artists = await response.json();

const artistList = document.querySelector(`ol`);


const artistData = artists.data.map((event) => {
  return event
})

artistData.forEach((artist) => {

  const artistLI = document.createElement(`li`);
  artistLI.innerHTML = `
    <h3>${artist.name}</h3>
  `

  artistList.append(artistLI);

})
}

renderArtists();