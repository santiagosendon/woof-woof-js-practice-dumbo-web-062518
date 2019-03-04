document.addEventListener('DOMContentLoaded', () =>{
const dogBar = document.querySelector('#dog-bar')
const baseUrl = 'http://localhost:3000/pups'
const dogSummary = document.querySelector('#dog-summary-container')
const dogInfoDiv = document.querySelector('#dog-info')
fetchDogBar()

function fetchDogBar(){
  fetch(baseUrl)
  .then(res => res.json())
  .then(renderDogBar)
}

function renderDogBar(dogs){
  dogs.forEach(renderDogsOnBar)
}
// create a span that render dog name on dog bar for each dog
//make sure u set an attribute to the span as an ID to show individual dogs the set attribute takes in 2 arguments
//although the dogs has Ids in the database the individual spans dont
function renderDogsOnBar(dog){
 const span = document.createElement("span")
 span.setAttribute('data-id',dog.id)
 span.innerText = `${dog.name}`
 span.addEventListener('click', showDog)
 dogBar.append(span)
}
//we need to fetch the dog id with the url to display the dogs
//need to do res.json in the fetch because it is the response converted to json
// console log the .then to make sure your grabbing one dog obeject
function showDog(e){
 const dogId = e.target.dataset.id
 fetch(`${baseUrl}/${dogId}`)
 .then(res => res.json())
 .then(dog => {
   const goodOrBad = dog.isGoodDog   ? "GoodBoy!": "BAD DOG!! wtf"
   dogInfoDiv.innerHTML = `<img src= ${dog.image}>
 <h2>${dog.name}</h2>
 <button>${goodOrBad}</button>`

 })
}



















})
