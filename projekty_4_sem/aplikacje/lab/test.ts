interface Smerf {
    imie: string;
    czapeczka: boolean;
    bucikiDoPasa: string;
    niebieskiKolor: boolean;
    chodzi(): void;
    mowi(): void;
    pracuje?(): void;
}
interface Malarz extends Smerf {
    maluje(): void;
    pracuje(): void;
}
interface Harmoniusz extends Smerf {
    spiewa(): void;
}
