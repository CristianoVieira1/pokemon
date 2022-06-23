import { InitialAccessKeywords } from './initialAccess';
import { InputPickerKeywords } from './components/InputPicker';

/* Each schema must have its own typing */
export type Keywords =
  | InitialAccessKeywords
  | InputPickerKeywords

