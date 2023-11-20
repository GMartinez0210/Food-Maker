import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CollectionService } from '../service/collection.service';

export const fetchCollectionsResolver: ResolveFn<void> = (route, state) => {
  return inject(CollectionService).fetchCollections();
};
