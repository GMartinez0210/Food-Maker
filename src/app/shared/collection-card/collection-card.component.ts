import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICollection } from 'src/app/interface/collection.interface';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent {
  @Input()
  collection: ICollection = {} as ICollection

  constructor(
    private readonly router: Router
  ) { }

  handleClickCollection() {
    const recipes = this.collection.recipes

    if(!recipes.length) return

    this.router.navigate(["/favorite", this.collection.id])
  }
}