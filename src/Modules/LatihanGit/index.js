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
        <ul>
        <h1>Feature A List Karakter</h1>
          <li>Ayaka</li>
          <li>Keqing</li>
          <li>Yelan</li>
        </ul>
        <ul>
        <h1>Feature B List Makanan Kesukaan</h1>
          <li>Mie Ayam</li>
          <li>Nasi Goreng</li>
          <li>Soto</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList