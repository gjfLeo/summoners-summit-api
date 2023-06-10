export interface DBType {
    games: Game[];
    gamePlayers: GamePlayer[];
    decks: Deck[];
}

interface Game {
    id: string;
    name: string;
    date: string;
    turns: number;
    video: string;
}

interface GamePlayer {
    gameId: string;
    name: string;
    deckId: string;
    startFirst: boolean | undefined;
    win: boolean | undefined;
}

interface Deck {
    id: string;
    characterCards: string[];
    actionCards: Record<string, number>;
}
