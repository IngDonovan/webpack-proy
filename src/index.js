const $tooltext = document.getElementById('barInfo');
const $name = document.querySelector('h1');
const $nickName = document.querySelector('h2');
const $profile = document.getElementById('profile');
const $img = document.getElementById('imgP');
const $side = document.getElementById('side');
const $links = document.getElementById('links');


const data = 
{
    tooltext: "We are working for you!",
    name: "Donovan Rojas Mendoza",
    nickname: "@ingdrm",
    tecnologias: 'Frontend Developer, #JavaScript #React #Web3',
    description: "I am an industrial engineer and mechatronics technologist with a passion for web development. My goal is to become a highly skilled full-stack developer and provide innovative technological solutions.With a solid foundation in HTML, CSS, and JavaScript, I have created frontend projects that showcase my ability to design attractive and functional interfaces.",
    avatar: "https://avatars.githubusercontent.com/u/119254368?s=400&u=79c99a8bb518a60725783d3f07ec4a3c31a45c21&v=4",
    social: 
    [
      {
        name: "youtube",
        url: "https://www.youtube.com/channel/UCTosbAful3tW1T5K_7f9wvQ",
        username: "@IngeDrm",
      },
      {
        name: "github",
        url: "https://github.com/IngDonovan",
        username: "IngDonovan",
      },
      {
        name: "twitter",
        url: "https://twitter.com/ingdrm",
        username: "@ingdrm",
      },
      {
        name: "linkedin",
        url: "https://linkedin.com/in/ingdonovanrm",
        username: "ingdonovanrm",
      },
    ],
    
    links: 
    [
      {
        name: "Proyects",
        url: "https://example.com/",
        color: "blue",
        emoji: "📖",
      },
      {
        name: "podcast",
        url: "https://example.com/",
        color: "slate",
        emoji: "💬",
      },
    ],
    footer: "Deus meus et omnia",
};

const main = ( ) => {
  let tooltext = document.createTextNode(data?.tooltext);
  let name = document.createTextNode(data?.name);
  let nick = document.createTextNode(data?.nickname);
  let profile = document.createTextNode(data?.tecnologias);
  let side = document.createTextNode(data?.description);
  
  
  let links = data?.links?.map((link) => {
    return `
      <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
          <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
          href="${link.url}" target="_blank">
          ${link.name}
          </a>
          <span>${link.emoji}</span>
      </div>`
    }).join('');

    let newItem = document.createElement('section');
    newItem.innerHTML = links;

    $img.src = data?.avatar;

    $tooltext.appendChild(tooltext);
    $name.appendChild(name);
    $nickName.appendChild(nick);
    $profile.appendChild(profile);
    $side.appendChild(side);
    
    $links.appendChild(newItem);
}


main();
