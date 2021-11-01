import './App_87.css';
import Menu_87 from './components/Menu_87';
import Category_87 from './components/Category_87';
import items from './data';
import { useState } from 'react';

const allCategories = [`all`, ...new Set(items.map((item) => item.category))];
console.log('allCategories', allCategories);

function App_87() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Category_87 categories={categories} filterItems={filterItems} />
          <Menu_87 items={menuItems} />
        </section>
      </main>
    </div>
  );
}

export default App_87;
