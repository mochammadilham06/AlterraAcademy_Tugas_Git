
import './Modules/LatihanGit/index.js';
import React from 'react';
import ShoppingList from './Modules/LatihanGit/index.js';


class Index extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <ShoppingList/>
      </div>
    );
  }
}

export default Index