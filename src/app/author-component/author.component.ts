import { Component } from "@angular/core";

import { AuthorService } from './author.service';

@Component({
    selector: 'author',
    templateUrl: './author.component.html',
    providers: [AuthorService]
})
export class AuthorComponent {
    title: "Author Component";
    authors;

    constructor(authorService : AuthorService) {
        this.authors = authorService.getAuthors();
    }
}