export interface DBType {
    games: Game[];
    decks: Deck[];
}

interface Game {
    id: string;
    name: string;
    date: string;
    turns: number;
    video: string;
    versusInfo: [GameVersusInfo, GameVersusInfo];
}

interface GameVersusInfo {
    player: string;
    deckId: string;
    startFirst: boolean | undefined;
    win: boolean | undefined;
}

interface Deck {
    id: string;
    player: string;
    characterCards: string[];
    actionCards: Record<ActionCardName, number>;
}

type ActionCardName = string;
