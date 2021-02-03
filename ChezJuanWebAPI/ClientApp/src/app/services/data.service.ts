import { Injectable, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Comment } from 'src/app/models/comments';
import { Recommendation } from '../models/recommendations.model';
import { RecipeDetail } from '../models/recipe-detail';
import { Rating } from '../models/rating';
import { RecipeCategory } from '../models/recpe-category';


@Injectable({
    providedIn: 'root'
})

export class DataService implements OnInit, OnDestroy {

    subscription: Subscription[];
    baseUrl: string;
    apiPath: string;
    http: HttpClient;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        http: HttpClient,
        @Inject('BASE_URL') baseUrl: string,
    ) {
        this.http = http;
        this.apiPath = baseUrl + 'api/recipe/'
    }
    ngOnInit(): void {

    }
    
    ngOnDestroy(): void {

    }

    getComments(recipeId: number): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.apiPath + 'GetRecipeComments/' + recipeId);
    }



    getRecommendations(): Observable<Recommendation[]> {
        return this.http.get<Recommendation[]>(this.apiPath + 'GetRecommendations');
    }

    getRecipe(recipdeId: number): Observable<RecipeDetail> {
        return this.http.get<RecipeDetail>(this.apiPath + 'GetRecipe/' + recipdeId);
    }

    SaveRecipeComments(comment: Comment): Observable<any> {
        const url = this.apiPath + 'SaveRecipeComments'; 
        return this.http.post(url, comment, this.httpOptions);
    }
    
    saveRecipeRating(content: Rating): Observable<any> {
        const url = this.apiPath + 'SaveRating'; 
        return this.http.post(url, content, this.httpOptions);
    }

    getCatogies(): Observable<RecipeCategory[]> {
        const url = this.apiPath + 'GetRecipeCatagories'; 
        return this.http.get<RecipeCategory[]>(url, this.httpOptions);
    }
}
