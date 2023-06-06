import { FC } from 'react';
import { Link , Outlet } from 'react-router-dom';
interface ILayoutProps {}

export const Layout: FC<ILayoutProps> = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/parity-check'>Parity check</Link>
          </li>
          <li>
            <Link to='/crc'>CRC</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};
