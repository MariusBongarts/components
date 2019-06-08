import { UserRole } from './types/userRole';
export interface JwtUser {
  id: string,
  email: string,
  flatId: string,
  role: UserRole
}