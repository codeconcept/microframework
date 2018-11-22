import './app.css';
import yo from 'yo-yo';
import EventEmitter from 'events';

const state = {
  n: 0
};

const ee = new EventEmitter();

const div = document.createElement('div');
const root = document.body.appendChild(div);


yo.update(root, yo`<div>
  <h2>Compteur</h2>
  <div>${state.n}</div>
  <button onclick=${decrement}>-</button>
  <button onclick=${increment}>+</button>
  <span>${JSON.stringify(state)}</span>
</div>`);

function increment() {
  ee.emit('increment-counter');
}

function decrement() {
  ee.emit('decrement-counter');
}

function update() {
  yo.update(root, yo`<div>
    <h2>Compteur</h2>
    <div>${state.n}</div>
    <button onclick=${decrement}>-</button>
    <button onclick=${increment}>+</button><br>
    <span>${JSON.stringify(state)}</span>
  </div>`);
}

ee.on('increment-counter', function() {
  state.n += 1;
  update();
});

ee.on('decrement-counter', function() {
  state.n -= 1;
  update();
});

window.state = state;

update();