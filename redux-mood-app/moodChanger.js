const h2 = document.querySelector('h2');
const happyButton = document.querySelector('#happy');
const sadButton = document.querySelector('#sad');
const angryButton = document.querySelector('#angry');
const confusedButton = document.querySelector('#confused');
const resetButton = document.querySelector('#reset');

// idk: ╮(╯_╰)╭
// happy: ʘ‿ʘ
// sad: Q_Q
// angry: ಠ_ಠ
// confused: (@_@)

happyButton.addEventListener('click', function (e) {
  store.dispatch({ type: 'HAPPY', payload: 'ʘ‿ʘ' });
  const state = store.getState();
  h2.innerText = state.mood;
});

sadButton.addEventListener('click', function (e) {
  store.dispatch({ type: 'SAD', payload: 'Q_Q' });
  const state = store.getState();
  h2.innerText = state.mood;
});

angryButton.addEventListener('click', function (e) {
  store.dispatch({ type: 'ANGRY', payload: 'ಠ_ಠ' });
  const state = store.getState();
  h2.innerText = state.mood;
});

confusedButton.addEventListener('click', function (e) {
  store.dispatch({ type: 'CONFUSED', payload: '(@_@)' });
  const state = store.getState();
  h2.innerText = state.mood;
});

resetButton.addEventListener('click', function (e) {
  store.dispatch({ type: 'RESET', payload: '╮(╯_╰)╭' });
  const state = store.getState();
  h2.innerText = state.mood;
});