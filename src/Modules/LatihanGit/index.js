import React from 'react';


class ShoppingList extends React.Component {
  render() {
    return (
      // Developer Branch
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
        <h1>Default Fitur</h1>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList