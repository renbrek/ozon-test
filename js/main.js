let indicator = document.querySelector('.indicator');
let input = document.getElementById('value');
let hideCheckbox = document.getElementById('hide');
let animateCheckbox = document.getElementById('animate');

const progressInitialValue = 75;
input.value = progressInitialValue;

input.addEventListener('input', () => {
  const minValue = 0;
  const maxValue = 100;

  if (input.value < minValue) input.value = minValue;
  if (input.value > maxValue) input.value = maxValue;
  setProgress(input.value);
});

animateCheckbox.addEventListener('change', () => {
  const rotateClass = 'rotate';

  indicator.classList.toggle(rotateClass);
});

hideCheckbox.addEventListener('change', () => {
  hideCheckbox.checked
    ? (indicator.style.opacity = 0.0)
    : (indicator.style.opacity = 1);
});

const setProgress = (progressSetValue) => {
  indicator.style.background = `conic-gradient(
    #005bff ${progressSetValue * 3.6}deg,
    #eff3f6 ${progressSetValue * 3.6}deg
    )`;
};

setProgress(input.value);
