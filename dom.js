let yee = document.getElementById("udah-container");

let udah = [
    {
        title:"Coding",
        image:"./img/code-stable.png",
        deskrpsi:"",
    },
    {
        title:"Bahasa Inggris",
        image:"./img/—Pngtree—british flag_2536383.png",
        deskrpsi:"",
    },
    {
        title:"Mutun Jurumiah",
        image:"",
        deskrpsi:"",
    },
]

for (let i = 0; i < udah.length; i++) {
    let udahlagi = udah[i];

    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("h2");
    title.textContent = udahlagi.title;

    let image = document.createElement("img");
    image.src = udahlagi.image;
    image.alt = udahlagi.title;
    image.className = "img";

    let deskrpsi = document.createElement("p");
    deskrpsi.textContent = udahlagi.deskrpsi;

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(deskrpsi);

    yee.appendChild(card);
    
};


let yoo = document.getElementById("tugas-container")

let tugas = [
    {
        title: "ha",
        image: "./img/afton.jpeg",
        deskrpsi: "udahan yappingnya ?",
        link: "",
    },
    {
        title: "ho",
        image: "./img/pinhead.jpeg",
        deskrpsi: "ketika lu kentut di kelas orang nggak merhatiin lu, tetapi ketika lu berak di kelas, orang-orang akan memerhatikan lu, terkadang dalam kehidupan, orang-orang nggak akan memerhatikan lu sebelum lu mgambil langkah yang besar",
        link: "",
    },
    {
        title: "hu",
        image: "./img/yoshie.jpeg",
        deskrpsi: "",
        link: "https://youtu.be/8aSMaAgzafs?si=dldbzrvJL-GP-7V4",
    },
]

for (let a = 0; a < tugas.length; a++) {
    let tugasLagi = tugas[a];

    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("h2");
    title.textContent = tugasLagi.title;

    let image = document.createElement("img");
    image.src = tugasLagi.image;
    image.alt = tugasLagi.title;
    image.className = "img";

    let deskrpsi = document.createElement("p");
    deskrpsi.textContent = tugasLagi.deskrpsi;

    let link = document.createElement("a");
    link.href = tugasLagi.link;
    link.textContent = "selengkapnya";

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(deskrpsi);
    card.appendChild(link);

    yoo.appendChild(card);

}


