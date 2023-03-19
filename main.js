console.log (document.querySelectorAll("header"))
document.querySelector("li").remove()


document.querySelector(".featured span").remove()


document.querySelector(".posts article").remove()



document.querySelectorAll(".posts h3")
.forEach(el => {
    el.remove()
})

let firstSection = document.querySelector("section");
firstSection.classList.add("featured");

let article = document.createElement("article");
let image = document.createElement("img");
image.src = "./images/paul-gilmore-unsplash.jpg";
image.alt = "Image of a mountain in front of a lake.";
article.append(image);

let h3 = document.createElement("h3");
h3.textContent = "Stop Planning";
article.append(h3);

let paragraph = document.createElement("p");
paragraph.textContent = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";article.append(paragraph);

let aside = document.createElement("aside");
article.append(aside);
let asideText = document.createElement("p");
aside.append(asideText);
let span = document.createElement("span");
asideText.append(span);
let strong = document.createElement("strong");
strong.textContent = "Read Time:";
span.append(strong);
span.innerHTML += " 4 Minutes ";
let link = document.createElement("a");
link.href = "#";link.textContent = "Read more...";
asideText.append(link);

let postsSection = document.querySelector(".posts");
postsSection.append(article);

let firstArticle = postsSection.querySelector("article");
let secondArticle = postsSection.children[1];
postsSection.insertBefore(secondArticle, firstArticle);
firstArticle = postsSection.children[0];
secondArticle = postsSection.children[1];
postsSection.insertBefore(firstArticle, secondArticle);