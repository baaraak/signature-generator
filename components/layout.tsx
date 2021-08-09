import Header from './header';
import Meta from './meta';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen overflow-hidden bg-gray-200">{children}</div>
    </>
  );
};

export default Layout;
