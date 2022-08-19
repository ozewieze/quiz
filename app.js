// correcte antwoorden

const rightAnswers = ["A", "B", "A", "A", "A"];
// console.log(rightAnswers);

const form = document.querySelector(".quiz-form");
// console.log(form);
const result = document.querySelector(".score");
console.log(result.classList);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];
  console.log(userAnswers);
  // check answers

  userAnswers.forEach((answer, i) => {
    if (answer === rightAnswers[i]) {
      score += 20;
    }
    console.log(score);
  });
  // display zichtbaar maken
  result.classList.remove("hide");
  result.querySelector("span").textContent = `${score}%`;

  // scroll naar boven
  scrollTo(0, 0);

  let output = 0;

  const timer = setInterval(() => {
    output++;
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    }
  }, 10);
});
