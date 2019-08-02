import { Simulator } from './simulator';

const iterations = 100000;

console.log('Keep win ratio: ' + Simulator.run(false, iterations));
console.log('Swap win ratio ' + Simulator.run(true, iterations));
console.log('iterations: ' + iterations);
