import reactLogo from '@/Assets/react.svg';
import viteLogo from '@/Assets/vite.svg';

const Header: React.FC = () => (
  <>
    <div id="logos">
      <img src={viteLogo} className="logo" data-testid="vite-logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" data-testid="react-logo" alt="React logo" />
    </div>
    <h2>Vite 5 + React 18 + TypeScript + Eslint (Airbnb) & Prettier + Absolute Imports + Vitest = ViteRC❤️🔥</h2>
  </>
);

export default Header;
