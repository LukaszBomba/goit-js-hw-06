const categoryNum = document.querySelectorAll("ul#categories>li").length;

const category = document.querySelectorAll("h2");

const elements = document.querySelectorAll(".item>ul");

console.log("Number of categories :", categoryNum);

for (let i=0;i<categoryNum;i++){
console.log("Category :", category[i].textContent);
console.log("Elements :", elements[i].children.length);
}