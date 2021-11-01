import logo from './logo.svg';
import './App_87.css';
import Menu_87 from './components/Menu_87';
import items from './data';
import { useState } from 'react';

function App_87() {
  const [menuItems, setMenuItems] = useState(items);
  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          {/* <div className="btn-container">
            <button type="button" className="filter-btn">
              all
            </button>
            <button type="button" className="filter-btn">
              breakfast
            </button>
            <button type="button" className="filter-btn">
              lunch
            </button>
            <button type="button" className="filter-btn">
              shakes
            </button>
          </div> */}
          <Menu_87 items={items} />
        </section>
      </main>
    </div>
  );
}

export default App_87;
