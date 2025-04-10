let score = 0;

const scoreDisplay = document.getElementById('score');
const button = document.getElementById('click-button');

button.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
});
