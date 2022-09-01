let indicator = document.querySelector('.indicator');
let input = document.getElementById('value');
let hideCheckbox = document.getElementById('hide');
let animateCheckbox = document.getElementById('animate');

let progressInitialValue = 75;
input.value = progressInitialValue;

input.addEventListener('input', () => {
  setProgress(input.value);
});

animateCheckbox.addEventListener('change', () => {
  animateCheckbox.checked ? rotateOn() : rotateOff();
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

const rotateClass = 'rotate';

const rotateOn = () => {
  indicator.classList.add(rotateClass);
};

const rotateOff = () => {
  indicator.classList.remove(rotateClass);
};

setProgress(input.value);
