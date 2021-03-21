import { bestOfDetail } from "./bestof-detail";

export class BestOfItem {
    id: Number;
    name: string;
    description: string;
    image: string;
}

export class BestOf {
    item: BestOfItem;
    places: bestOfDetail[];
}