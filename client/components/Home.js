import React from 'react';

const Home = () => {
  return (
    <div className="main">
      <div className="list_view">
        <span className="list__header">Inventory acts</span>
        <ul>
          <li>Inventory act 17.01.17 09:12</li>
          <li className="selected">Inventory act 17.01.17 10:12</li>
          <li>Inventory act 17.01.17 11:12</li>
          <li>Inventory act 17.01.17 12:12</li>
          <li>Inventory act 17.01.17 13:12</li>
        </ul>
      </div>
    <div className="document_view">
      <div className="document__header">
        <span className="header__type">Inventory act</span> <span className="header__id">17.01.17 10:12</span>
      </div>
      <div className="document__table">
        <table>
          <thead>
            <tr className="product">
              <th className="line_number"><span></span></th>
              <th className="text"><span>Product name</span></th>
              <th className="number"><span>Expected</span></th>
              <th className="number"><span>Actual</span></th>
              <th className="number"><span>Divergence</span></th>
            </tr>
          </thead>
          <tbody>
            <tr className="product">
              <td className="line_number"><span>1</span></td>
              <td className="text"><span>HP ProBook</span></td>
              <td className="number"><span>1</span></td>
              <td className="number"><span>1</span></td>
              <td className="number results"><span></span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>2</span></td>
              <td className="text"><span>Apple Macbook</span></td>
              <td className="number"><span>12</span></td>
              <td className="number"><span>12</span></td>
              <td className="number results"><span></span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>3</span></td>
              <td className="text"><span>Asus Gaming Laptop</span></td>
              <td className="number"><span>2</span></td>
              <td className="number"><span>1</span></td>
              <td className="number results"><span>-1</span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>4</span></td>
              <td className="text"><span>HTC Hero</span></td>
              <td className="number"><span>4</span></td>
              <td className="number"><span>5</span></td>
              <td className="number results"><span>+1</span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>5</span></td>
              <td className="text"><span>Samsung Galaxy</span></td>
              <td className="number"><span>2</span></td>
              <td className="number"><span>2</span></td>
              <td className="number results"><span></span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>6</span></td>
              <td className="text"><span>Apple iPhone</span></td>
              <td className="number"><span>5</span></td>
              <td className="number"><span>5</span></td>
              <td className="number results"><span></span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>7</span></td>
              <td className="text"><span>Sony Xperia</span></td>
              <td className="number"><span>3</span></td>
              <td className="number"><span>3</span></td>
              <td className="number results"><span></span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>8</span></td>
              <td className="text"><span>JavaScript book</span></td>
              <td className="number"><span>3</span></td>
              <td className="number"><span>3</span></td>
              <td className="number results"><span></span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>9</span></td>
              <td className="text"><span>Design Patterns book</span></td>
              <td className="number"><span>1</span></td>
              <td className="number"><span>2</span></td>
              <td className="number results"><span>+1</span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>10</span></td>
              <td className="text"><span>Scala book</span></td>
              <td className="number"><span>1</span></td>
              <td className="number"><span>1</span></td>
              <td className="number results"><span></span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>10</span></td>
              <td className="text"><span>Clean Code book</span></td>
              <td className="number"><span>2</span></td>
              <td className="number"><span>2</span></td>
              <td className="number results"><span></span></td>
            </tr>
            <tr className="product">
              <td className="line_number"><span>+</span></td>
              <td className="text"><span></span></td>
              <td className="number"><span></span></td>
              <td className="number"><span></span></td>
              <td className="number results"><span></span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="document__controls">
        <a href="#" className="button button-default">Save</a>
        <a href="#" className="button">Cancel</a>
      </div>
    </div>
    <div className="subsystems_view">
      <ul>
        <li>
          <a href="#"><img src="img/a.png"/><span>Arrival</span></a>
        </li>
        <li>
          <a href="#"><img src="img/d.png"/><span>Dispatch</span></a>
        </li>
        <li>
          <a href="#"><img src="img/p.png"/><span>Products</span></a>
        </li>
        <li>
          <a href="#" className="current"><img src="img/i.png"/><span>Inventory</span></a>
        </li>
        <li>
          <a href="#"><img src="img/r.png"/><span>Report</span></a>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default Home;
