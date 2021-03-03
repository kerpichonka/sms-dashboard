const featuresButton = document.getElementById('features-button');
const features = document.getElementById('features');
const navBar = document.getElementById('navbar-toggle');
const nav = document.getElementById('nav');
const list = document.getElementById('list')
const items = [...list.children]

console.log(featuresButton)

featuresButton.onclick = () => {
  features.classList.toggle('hidden');
  features.classList.toggle('block');
}

navBar.onclick = () => {
  nav.classList.toggle('-top-full');
  nav.classList.toggle('top-0');
  nav.classList.add('h-screen');
}

for( let i = 0; i < items.length; i++) {
  items[i].onclick = () => {
    nav.classList.toggle('-top-full');
    nav.classList.remove('h-screen');

  }
}

