let yee = document.getElementById("udah-container");

let udah = [
    {
        title:"Coding",
        image:"./img/code-stable.png",
        deskrpsi:"saya belajar ini baru pertama kali, dimulai dari dasar, yaitu HTML, kemudian CSS, lalu jS",
    },
    {
        title:"capcut",
        image:"./img/cacat.png",
        deskrpsi:"aplikasi pengeditan video serbaguna yang populer untuk membuat konten media sosial seperti TikTok, Reels Instagram, dan YouTube",
    },
    {
        title:"canva",
        image:"./img/kapak.png",
        deskrpsi:"platform desain grafis online yang memungkinkan pengguna membuat berbagai konten visual, seperti poster, presentasi, dan postingan media sosial, dengan mudah meskipun tidak memiliki pengalaman desain",
    },
    {
        title:"Figma",
        image:"./img/sigma.png",
        deskrpsi:"platform desain berbasis web yang populer untuk kolaborasi, memungkinkan pengguna membuat desain antarmuka pengguna (UI), prototipe, dan diagram secara bersama-sama",
    },
    {
        title: "Tahfidz",
        image:"./img/quran.png",
        deskrpsi:"saya menghafal quran dimulai dari juz 30 hingga 26 lalu dari juz 1 hingga 5",
    },
    {
        title:"Bahasa Inggris",
        image:"./img/—Pngtree—british flag_2536383.png",
        deskrpsi:"saya belajar bahasa inggris mulai dari vocabbulary, grammar, speaking yang mana semuanya dimulai dari 0",
    },
    {
        title: "Bahasa arab",
        image: "./img/alngapakngiyatu.png",
        deskrpsi: "dengan buku bayna yadaik ini saya belajar bahasa arab mulai dari dasar",
    },
    {
        title:"Mutun Jurumiah",
        image:"./img/jurum.jpeg",
        deskrpsi:"di buku ini saya menghafal beberapa i'rob, lalu dipraktekkan kedalam beberapa ayat alqur'an.",
    },
    {
        title: "Tahajji",
        image: "./img/tahajji.png",
        deskrpsi: "buku ini menjelaskan bagaimana cara melafalkan huruf-huruf hijaiyah secara satu persatu sampe suara gw abis anjir",
    },

]

for (let i = 0; i < udah.length; i++) {
    let udahlagi = udah[i];

    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("h3");
    title.textContent = udahlagi.title;

    let image = document.createElement("img");
    image.src = udahlagi.image;
    image.alt = udahlagi.title;
    image.className = "img JS";

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
        title: "project IT",
        image: "./img/Cuplikan layar 2025-11-30 133907.png",
        deskrpsi: "membuat simulasi lampu lalu lintas, kalkulator sederhana, dan kalkulator zakat emas menggunakan coding",
        link: "https://github.com/Masdul18/tugasSemester-I.git",
    },
    {
        title: "vlog inggris",
        image: "./img/camcorders.png",
        deskrpsi: "beberapa video project inggris berupa vlog pendek",
        link: "https://www.youtube.com/playlist?list=PLQdOcyZz3_KSj3mJtkv8KI5E-yt_41yLi",
    },
    {
        title: "poster inggris",
        image: "./img/adjective.png",
        deskrpsi: "membuat 2 poster yang berupa vocabulary dan adjective",
        link: "",
    },
    {
        title: "short movie",
        image: "./img/ticci toby.jpeg",
        deskrpsi: "tugas akhir semester 1, film pendek dengan tema stop bullying",
        link: "https://drive.google.com/file/d/13ykudTWVc69JUrFPWIplP7YPjmMl9zE8/view?usp=sharing",
    },
    {
        title: "praktek i'rob",
        image: "./img/image.png",
        deskrpsi: "video pendek bagaimana cara mengi'robkan kalimat",
        link: "https://youtube.com/shorts/kdT1Z2_sifA?feature=share",
    },
    {
        title: "poster i'rob",
        image: "./img/i'rob ori.png",
        deskrpsi:"poster tentang irob",
        link: "https://drive.google.com/drive/folders/1t1iTFip9PZhvz2KX6IsNmjaygNHu-bd6?usp=drive_link",
    },
]

for (let a = 0; a < tugas.length; a++) {
    let tugasLagi = tugas[a];

    let card = document.createElement("div");
    card.className = "card tugas";


    let title = document.createElement("h3");
    title.textContent = tugasLagi.title;

    let image = document.createElement("img");
    image.src = tugasLagi.image;
    image.alt = tugasLagi.title;
    image.className = "img JS";

    let deskrpsi = document.createElement("p");
    deskrpsi.textContent = tugasLagi.deskrpsi;

    let link = document.createElement("a");
    link.href = tugasLagi.link;
    link.textContent = "selengkapnya";
    link.className = "a-JS";

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(deskrpsi);
    card.appendChild(link);

    yoo.appendChild(card);

}


