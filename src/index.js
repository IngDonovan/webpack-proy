const $tooltext = document.getElementById('barInfo');
const $name = document.querySelector('h1');
const $nickName = document.querySelector('h2');
const $profile = document.getElementById('profile');
const $img = document.getElementById('imgP');
const $side = document.getElementById('side');
const $social = document.getElementById('sociaLinks');
const $links = document.getElementById('links');
const $footer = document.getElementById('footer');

const data = 
{
    tooltext: "We are working for you!",
    name: "Donovan Rojas Mendoza",
    nickname: "@ingdrm",
    tecnologias: `Frontend Developer, #JavaScript #React #Web3`,
    description: "I am an industrial engineer and mechatronics technologist with a passion for web development. My goal is to become a highly skilled full-stack developer and provide innovative technological solutions.With a solid foundation in HTML, CSS, and JavaScript, I have created frontend projects that showcase my ability to design attractive and functional interfaces.",
    avatar: "https://avatars.githubusercontent.com/u/119254368?s=400&u=79c99a8bb518a60725783d3f07ec4a3c31a45c21&v=4",
    social: 
    [
      {
        name: "YouTube",
        url: "https://www.youtube.com/@IngeDrm",
        username: "@IngeDrm",
        color: "[#FF0000]",
        path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
        viewBox: "0 0 24 24",
      },
      {
        name: "GitHub",
        url: "https://github.com/IngDonovan",
        username: "IngDonovan",
        color: "[#6e5494]",
        path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
        viewBox: "0 0 24 24",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/ingdrm",
        username: "@ingdrm",
        color: "blue-300",
        path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
        viewBox: "0 0 24 24",
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ingdonovanrm",
        username: "ingdonovanrm",
        color: "blue-500",
        path: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        viewBox: "0 0 448 512",
      },
    ],
    
    links: 
    [
      {
        name: "WebSide",
        url: "https://example.com/",
        color: "cyan",
        emoji: "📖",
      },
      {
        name: "Proyects",
        url: "https://example.com/",
        color: "blue",
        emoji: "📖",
      },
      {
        name: "Blog",
        url: "https://example.com/",
        color: "slate",
        emoji: "💬",
      },
    ],
    footer: "Copyleft © 2023 🚀 Deus meus et omnia",
};

const main = ( ) => {
  let tooltext = document.createTextNode(data?.tooltext);
  let name = document.createTextNode(data?.name);
  let nick = document.createTextNode(data?.nickname);
  let profile = document.createTextNode(data?.tecnologias);
  let side = document.createTextNode(data?.description);
  let footer = document.createTextNode(data?.footer);
  
  let socialinks = data?.social?.map((socia) => {
    return `
    <a href="${socia.url}" target="_blank">
      <svg class="w-6 h-6 cursor-pointer text-gray-400 hover:text-${socia.color} fill-current" viewBox="${socia.viewBox}"
        xmlns="http://www.w3.org/2000/svg">
        <title>${socia.name}</title>
        <path
          d="${socia.path}" />
      </svg>
    </a>`
  }).join('');
  
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

    let newSocial = document.createElement('section');
    newSocial.className = "mt-6 flex space-x-4";
    newSocial.innerHTML = socialinks;

    let newItem = document.createElement('section');
    newItem.innerHTML = links;

    $img.src = data?.avatar;
    $img.alt = data?.name;

    $tooltext.appendChild(tooltext);
    $name.appendChild(name);
    $nickName.appendChild(nick);
    $profile.appendChild(profile);
    $side.appendChild(side);
    
    $social.appendChild(newSocial);
    $links.appendChild(newItem);

    $footer.appendChild(footer);
}


main();
