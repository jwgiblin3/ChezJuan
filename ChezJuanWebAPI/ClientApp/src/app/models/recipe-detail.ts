export class RecipeDetail {
    title: string;
    description: string;
    //images: string[];
    image: string;
    time: string;
    serves: number;
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
    steps:number
    
}