document.addEventListener('DOMContentLoaded',() => {
const url = 'http://localhost:3000/pups'
const dogBar = document.querySelector('#dog-bar')
const dogInfo = document.querySelector('#dog-info')

fetchDogs()

function fetchDogs(){
  fetch(url)
  .then(res => res.json())
  .then(renderDogBar)
}

function renderDogBar(dogs){
  dogs.forEach( dog => addDogToDogBar(dog))

}

function addDogToDogBar(dog){
const span =  document.createElement('span')
span.innerText = `${dog.name}`
span.setAttribute("data-id", dog.id)
span.addEventListener('click', displayDogs)
dogBar.append(span)
}

function displayDogs(e){
const dogId =  e.target.dataset.id
fetch(`${url}/ ${dogId}`)
.then(res => res.json())
.then( dog => {
  const goodorbad = dog.isGoodDog ? "Good Boy!" : "bad Dog!"
  dogInfo.innerHTML = ` <img src=${dog.image}>
 <h2>${dog.name}</h2>
 <button data-id=${dog.id}>${goodorbad}</button>`
 const button = dogInfo.querySelector('button')
 button.addEventListener('click',toggleDog)
})

}
 function toggleDog(e){
   console.log('hi');
 }

})
