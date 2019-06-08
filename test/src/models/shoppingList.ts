import { Entity } from './entity';
import { ShoppingListItem } from './shoppingListItem';

export interface ShoppingList extends Entity {
    flatId: string;
    items: ShoppingListItem[];
  }