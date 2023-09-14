'use client';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import StyledComponentsRegistry from '../../../lib/registry';
import { GlobalStyles } from './GlobalStyles';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <StyledComponentsRegistry>
        <div>
          <GlobalStyles />
          {children}
        </div>
      </StyledComponentsRegistry>
    </RecoilRoot>
  );
};

export default Layout;
