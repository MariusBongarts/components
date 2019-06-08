import { Entity } from './entity';

export interface ShoppingListItem extends Entity {
    title: string;
    status: "open" | "done";
  }