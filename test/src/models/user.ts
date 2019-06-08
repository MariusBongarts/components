import { UserRole } from './types/userRole';
import { Entity } from './entity';
import { Language } from './types/language';
import { elementIsEnabled } from 'selenium-webdriver/lib/until';


/**
 * Created by MariusBongarts on 24.03.2019.
 */
export interface User extends Entity {
  name: string
  email: string
  role: UserRole
}
