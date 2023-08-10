import { UserActions } from './actions/actions';
import { Info } from './info/info';
import { NumberKeyboard } from './keyboard/numberkeyboard';

export function App() {
  return (
    <div>
      <Info></Info>
      <UserActions></UserActions>
      <NumberKeyboard></NumberKeyboard>
    </div>
  );
}
