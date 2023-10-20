const $gallery = document.getElementById('gallery');
const gallery = []

for (const em of emoji) {
    const emojiChar = em.char
    const emojiName = em.name
    gallery.push(`<div class="emoji"><div class="char"><center>${emojiChar}</center></div> 
    <div class="name"><center>${emojiName}</center></div></div>`)
    //gallery.push(`<li class="emoji-item">${emojiChar} ${emojiName}</li>`)
  }

$gallery.innerHTML += gallery.join('')

console.log($gallery);