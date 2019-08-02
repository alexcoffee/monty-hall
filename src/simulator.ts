import { Game } from './game';

export class Simulator {
    public static run(swap: boolean, iterations: number = 100): number {
        let win = 0;

        for (let i = 0; i < iterations; i++) {
            if (Simulator.playOnce(swap)) {
                win++;
            }
        }

        return win / iterations;
    }

    private static playOnce(swap: boolean): boolean {
        const game = new Game();
        let choice = Game.pickRandom();
        const open = game.openOther(choice);

        if (swap) {
            choice = game.changeChoice(choice, open);
        }

        return game.isWinner(choice);
    }
}
