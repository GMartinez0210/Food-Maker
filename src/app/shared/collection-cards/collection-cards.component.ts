import { Component, OnInit } from '@angular/core';
import { ICollection } from 'src/app/interface/collection.interface';
import { CollectionService } from 'src/app/service/collection.service';

@Component({
  selector: 'app-collection-cards',
  templateUrl: './collection-cards.component.html',
  styleUrls: ['./collection-cards.component.css']
})
export class CollectionCardsComponent implements OnInit {
  collections: ICollection[] = []

  constructor(
    private readonly collectionService: CollectionService,
  ) { }

  ngOnInit(): void {
    this.takeCollections()
  }

  takeCollections() {
    this.collectionService.$collections.subscribe(
      (collections) => this.collections = collections
    )
  }
}
