let datum = new Date().toLocaleDateString("de-DE");
let comments = [
    {
        name: "Adam ",
        date: datum,
        text: "lorem"
    }, {
        name: "Petr ",
        date: "15.1.2002 ",
        text: ".kjhgfdewrtyjklkjhgf"
    }, {
        name: "nekdo ",
        date: "24.12.2023 ",
        text: "uuuuugh"
    },
    {
        name: "pavel ",
        date: "1.1.2001 ",
        text: "asi pass"
    }
];

for (let i = 0; i < comments.length; i++) {

    let div = document.createElement("div");

    let name = document.createElement("b");
    name.textContent = comments[i].name;
    div.appendChild(name);

    let date = document.createElement("span");
    date.textContent = comments[i].date;
    div.appendChild(date);

    let text = document.createElement("span");
    text.textContent = comments[i].text;
    div.appendChild(text);

    document.querySelector("#result").appendChild(div);
}

