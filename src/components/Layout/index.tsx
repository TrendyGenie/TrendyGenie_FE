import StyledComponentsRegistry from '../../../lib/registry';
import { GlobalStyles } from './GlobalStyles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <div>
        <GlobalStyles />
        {children}
      </div>
    </StyledComponentsRegistry>
  );
};

export default Layout;
