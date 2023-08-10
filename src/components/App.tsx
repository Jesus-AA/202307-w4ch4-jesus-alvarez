import { UserActions } from './actions/actions';
import { DisplayNumbers } from './display/displaynumbers';
import { Info } from './info/info';
import { NumberKeyboard } from './keyboard/numberkeyboard';

export function App() {
  return (
    <div>
      <Info></Info>
      <DisplayNumbers></DisplayNumbers>
      <UserActions></UserActions>
      <NumberKeyboard></NumberKeyboard>
    </div>
  );
}
