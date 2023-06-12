const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = 
{
    name: "Donovan Rojas Mendoza",
    nickname: "@ingdrm",
    tecnologias: 'Frontend Developer, #JavaScript #React #Web3',
    description: "I'am web developer and like it, ",
    avatar: "https://avatars.githubusercontent.com/u/119254368?s=400&u=79c99a8bb518a60725783d3f07ec4a3c31a45c21&v=4",
    social: 
    [
      {
        name: "twitter",
        url: "https://twitter.com/ingdrm",
        username: "@ingdrm",
      },
      {
        name: "instagram",
        url: "https://instagram.com/",
        username: "",
      },
    ],
    
    links: 
    [
      {
        name: "blog",
        url: "https://example.com/",
        color: "blue",
        emoji: "📖",
      },
      {
        name: "podcast",
        url: "https://example.com/",
        color: "yellow",
        emoji: "💬",
      },
    ],
    footer: "Made with Love on Colombia",
};

/* <div class="bg-fuchsia-200 px-4 py-5 w-full flex justify-between">
    <a class="text-sm font-bold text-fuchsia-600 text-center hover:text-fuchsia-800 cursor-pointer"
    href="https:///l/mentor101" target="_blank">
    Mentorías
    </a>
    <span>💻</span>
</div> */

const main = ( ) => {
    let name = document.createTextNode(data?.name);
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
    $links.appendChild(newItem);
    $name.appendChild(name);
}


main();
