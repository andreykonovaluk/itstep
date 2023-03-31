/*
1. Используя только создание элементов через объекты создать следующий html-код:
        <article class="news__item">
            <a href="/news/we-offer-a-new-fertilizer-potassium-salt-60-nod/">
                <div class="news__img">
                    <img src="/upload/iblock/950/9509c6f8dc75758c59e66de60cffa317.webp" alt="We offer a new fertilizer – potassium salt 60% NOD">
                    <time>06.01.2023</time>
                </div>
                <div class="news__desciption">
                    <div class="news__title">
                        <h4>We offer a new fertilizer – potassium salt 60% NOD</h4>
                    </div>
                    <div class="news__text">
                        <p>We are pleased to inform you that we have decided to expand our product range and add another noteworthy and effective product, potassium salt 60% NOD.</p>
                    </div>
                    <div class="news__more">
                        <span>more</span>
                    </div>
                </div>
            </a>
        </article>
*/
let article = document.createElement("article");
article.classList.add("news__item");
document.body.insertAdjacentElement("afterbegin", article);

let a = document.createElement("a");
a.href = "/news/we-offer-a-new-fertilizer-potassium-salt-60-nod/";
article.insertAdjacentElement("afterbegin", a);

let div1 = document.createElement("div");
div1.classList.add("news__img");
a.insertAdjacentElement("afterbegin", div1);

let image = document.createElement("image");
image.setAttribute("src", "/upload/iblock/950/9509c6f8dc75758c59e66de60cffa317.webp");
image.setAttribute("alt", "We offer a new fertilizer – potassium salt 60% NOD");
div1.insertAdjacentElement("afterbegin", image);

let time = document.createElement("time");
time.innerHTML = "06.01.2023";
div1.lastElementChild.insertAdjacentElement("afterend", time);

let div2 = document.createElement("div");
div2.classList.add("news__desciption");
a.lastElementChild.insertAdjacentElement("afterend", div2);

let div3 = document.createElement("div");
div3.classList.add("news__title");
div2.insertAdjacentElement("afterbegin", div3);

let h4 = document.createElement("h4");
h4.innerHTML = "We offer a new fertilizer – potassium salt 60% NOD";
div3.insertAdjacentElement("afterbegin", h4);

let div4 = document.createElement("div");
div4.classList.add("news__text");
div3.insertAdjacentElement("afterend", div4);

let p = document.createElement("p");
p.innerHTML = "We are pleased to inform you that we have decided to expand our product range and add another noteworthy and effective product, potassium salt 60% NOD.";
div4.insertAdjacentElement("afterbegin", p);

let div5 = document.createElement("div");
div5.classList.add("news__more");
div2.insertAdjacentElement("beforeend", div5);

let span = document.createElement("span");
span.innerHTML = "more";
div5.insertAdjacentElement("afterbegin", span);



//2. Удалить из полученного кода все тег span, но оставить его содержимое.
let spans = document.querySelectorAll("span");
if(spans.length){
    Array.from(spans).forEach((item) => {
        item.outerHTML = item.innerText;
    });

}


//3. Времени добавить  красный фон, белый цвет и внутренние отступы в 25px для даты.
let timeAdd = document.querySelector("time");
if(timeAdd){
    timeAdd.style.backgroundColor = "#f00";
    timeAdd.style.color = "#fff";
    timeAdd.style.padding = "25px";
}


//4. Увеличить шрифт заголовка на 2px.
let header = document.querySelectorAll("h4");
if(header.length){
    Array.from(header).forEach((item) => {
        if (header) {
            let styles = getComputedStyle(item);
            let fontSize = parseInt(styles.fontSize, 10);
            item.style.fontSize = `${fontSize + 2}px`;
        }
    });
}


//5. Удалить ссылку из разметки, не меняя остальной структуры, но при этом сохранить ее адрес.
let links = document.querySelectorAll("a");
let saveHref = a.href;

if(links.length){
    
    Array.from(links).forEach((item) => {
        item.outerHTML = item.innerHTML;
    });
}


//6. Убернуть содержимое div с классом news__more в тег а и сделать ссылку на сохранненый адрес из предыдущего задания.
let divNewsMore = document.querySelector(".news__more");

if(divNewsMore){
    divNewsMore.innerHTML = `<a>${divNewsMore.innerHTML}</a>`;   
}

let newA = document.querySelector("a");

if(newA){
    newA.href = saveHref;    //!!!уточнить правильность метода, т.к. к ссылке добавился локальный адрес
}


//7. Добавить у новой ссылки атрибут title со значением заголовка новости.
newA.title = "Новости";


//8. Тег p заменить на тег b.
let ps = document.querySelectorAll("p");
if(ps.length){
    Array.from(ps).forEach((item) => {
        item.outerHTML = `<b>${item.innerHTML}</b>`;
    });
}


/*9. Тегу h4 -добавить следующие стили:
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: #000;*/
let h4Tag = document.querySelectorAll("h4");

if(h4Tag.length){
    Array.from(h4Tag).forEach((item) => {
        item.style.fontWeight = "500";
        item.style.lineHeight = "150%";
        item.style.textTransform = "uppercase";
        item.style.color = "#000";
    });
}