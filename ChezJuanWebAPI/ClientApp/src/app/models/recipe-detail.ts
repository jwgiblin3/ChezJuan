export class RecipeDetail {
    title: string;
    description: string;
    //images: string[];
    image: number;
    time: string;
    serves: number;
    rating: number;
    ratingCount: number;
    recipeIngrediants: string[];
    steps: string[];
    tags: string[];
    video: string;

    get hasVideo(): boolean {
        return (this.video && this.video.trim().length)>0? true:false;
    }

}

export class Media {
    link: string;

}

enum MediaType {
    image,
    video
}

export class RecipeListItem {
    id: number;
    title: string;
    description: string;
    image: string;
    time: string;
    serves: number;
    difficulty: number;
    rating: number;
    ratingCount: number;
    steps:number
    categories: string[];
    
}