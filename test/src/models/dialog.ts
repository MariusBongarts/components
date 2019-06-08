import { BootstrapColor } from './types/bootstrapColor';
/**
 * Created by MariusBongarts on 27.04.2019.
 * This model is created to create dialogs with a callback functon, which will be called when dialog gets confirmed
 */
export interface Dialog {
  msg: string;
  subMsg: string;
  cancelColor?: BootstrapColor;
  confirmColor?: BootstrapColor;
  callback?: () => Promise<void>;
}
