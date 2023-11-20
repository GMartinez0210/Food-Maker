import { Component, Input } from '@angular/core';
import { ICollection } from 'src/app/interface/collection.interface';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent {
  @Input()
  collection: ICollection = {} as ICollection
}
