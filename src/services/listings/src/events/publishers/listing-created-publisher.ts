import { Publisher, ListingCreatedEvent, Subjects } from '@jjmauction/common';

export class ListingCreatedPublisher extends Publisher<ListingCreatedEvent> {
  subject: Subjects.ListingCreated = Subjects.ListingCreated;
}
