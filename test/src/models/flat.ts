import { Entity } from './entity';
import { User } from './user';


/**
 * Created by MariusBongarts on 07.04.2019.
 */
export interface Flat extends Entity {
  name: string,
  users: User[]
}
