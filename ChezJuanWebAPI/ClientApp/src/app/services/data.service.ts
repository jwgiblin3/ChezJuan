import { Injectable, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Comment } from 'src/app/models/comments';


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

    SaveRecipeComments(comment: Comment): Observable<any> {
        const url = this.apiPath + 'SaveRecipeComments'; 
        return this.http.post(url, comment, this.httpOptions);
    }
}