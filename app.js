let chef = document.querySelector("#chef");
let forces = document.querySelector("#forces");
let askRating = document.querySelector(".askRating");
let about = document.querySelector(".about");
let currPlatform = document.querySelector(".currPlatform");
let submit = document.querySelector(".submit");
let predictedRating = document.querySelector(".predictedRating");
let predictedValue = document.querySelector(".predictedValue");
let cross = document.querySelector(".cross");
let rating = document.querySelector(".rating");
let flag = "codechef";
let w = 0.5253751404927927;
let b = 965.0013703951934;
let ans = 0;

chef.addEventListener("click", () => {
  about.style.display = "none";
  askRating.style.display = "flex";
  currPlatform.innerHTML = "Enter Codeforces Rating";
  flag = "codeforces";
});

forces.addEventListener("click", () => {
  about.style.display = "none";
  askRating.style.display = "flex";
  currPlatform.innerHTML = "Enter Codechef Rating";
  flag = "codechef";
});

submit.addEventListener("click", () => {
  predictedRating.style.display = "flex";
  about.style.display = "none";
  askRating.style.display = "none";
  currRating = rating.value;
  if (flag == "codeforces") {
    ans = currRating * w + b;
    ans = Math.floor(ans);
  } else {
    ans = (currRating - b) / w;
    ans = Math.floor(ans);
  }
  predictedValue.innerHTML = `Rating :- ${ans}`;
  rating.value = "";

});

cross.addEventListener("click", () => {
  predictedRating.style.display = "none";
  about.style.display = "flex";
  askRating.style.display = "none";
});
