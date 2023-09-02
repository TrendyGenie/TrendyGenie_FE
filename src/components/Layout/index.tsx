import StyledComponentsRegistry from '../../../lib/registry';
import { GlobalStyles } from './GlobalStyles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {children}
    </StyledComponentsRegistry>
  );
};

export default Layout;
