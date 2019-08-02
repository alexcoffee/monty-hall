export enum DOOR_VALUE {
    GOAT,
    GOLD,
}

export class Game {
    public static pickRandom(): number {
        return Math.floor(Math.random() * 3);
    }

    private doors: DOOR_VALUE[] = [
        DOOR_VALUE.GOAT,
        DOOR_VALUE.GOAT,
        DOOR_VALUE.GOAT,
    ];

    constructor() {
        this.doors[Game.pickRandom()] = DOOR_VALUE.GOLD;
    }

    public openOther(contestantChoice: number): number {
        while (true) {
            const newChoice = Game.pickRandom();

            if (newChoice === contestantChoice) {
                continue;
            }

            if (this.doors[newChoice] === DOOR_VALUE.GOLD) {
                continue;
            }

            return newChoice;
        }
    }

    public changeChoice(contestantChoice: number, openedDoor: number): number {
        for (let i = 0; i < this.doors.length; i++) {
            if (i === contestantChoice) {
                continue;
            }
            if (i === openedDoor) {
                continue;
            }
            return i;
        }

        throw new Error('Doors not initialized correctly.');
    }

    public isWinner(choice: number): boolean {
        return this.doors[choice] === DOOR_VALUE.GOLD;
    }
}
