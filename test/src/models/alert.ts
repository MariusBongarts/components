import { BootstrapColor } from './types/bootstrapColor';
/**
 * Created by MariusBongarts on 11.04.2019.
 *
 */
export interface Alert {
  color: BootstrapColor;
  msg: string;
  millis?: number;
}

type bootstrapColor = 'success' | 'danger' | 'warning' | 'info';