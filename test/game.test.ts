import { Simulator } from '../src/simulator';

describe('test the odds', () => {
    test('keeping yields 33% win ration', () => {
        const actual = Simulator.run(false, 10E5);
        const rounded = Math.round(actual * 100);

        expect(rounded).toBe(33);
    });

    test('swapping yields 66% win ration', () => {
        const actual = Simulator.run(true, 10E5);
        const rounded = Math.round(actual * 100);

        expect(rounded).toBe(67);
    });
});
