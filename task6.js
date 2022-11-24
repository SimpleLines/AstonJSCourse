const showData = async (url) => {
  let response = await fetch(url);
  let result = await response.json();
  return result;
};
let limit = 10;
const hintParagraph = document.querySelector("#hint");
const container = document.querySelector(".container");
const buttonArray = Array.from(document.querySelectorAll(".page-button"));
const buttonValues = [];
const buttonNodeList = document.querySelectorAll(".page-button");
const header = document.querySelector("header");
for (const value of buttonNodeList.values()) {
  buttonValues.push(value.value);
}
header.insertAdjacentHTML(
  "afterend",
  `<p class="number_limited"> total images ${limit}</p>`
);
buttonArray.map((item, index) =>
  item.addEventListener("click", () => {
    Array.from(document.querySelectorAll(".image-from-json")).map((item) =>
      item.remove()
    );
    showData(
      `https://jsonplaceholder.typicode.com/users/1/photos?_limit=${limit}&_page=${buttonValues[index]}`
    ).then((result) => {
      for (let i = 0; i < result.length; i++) {
        container.insertAdjacentHTML(
          "afterbegin",
          `<img src="${result[i].url}" class="image-from-json"/>`
        );
        hintParagraph.innerHTML = `You are currently on page <b>${buttonValues[index]}</b>`;
      }
    });
  })
);
