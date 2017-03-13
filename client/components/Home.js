/*  eslint camelcase:0  */
// TODO: object names (lines 8 to 12) need to be in camelCase

import React from 'react';
import cn from 'classnames';

// Import Style
import main from './main.css'; // 100% OK
import list_view from './list_view.css'; // 100% OK
import document_container from './document_container.css'; // 100% OK
import document__header from './document__header.css'; // 100% OK
import document__table from './document__table.css'; // 100% OK
import document__controls from './document__controls.css'; // 100% OK
import nav from './nav.css'; // 100% OK

const Home = () => {
  return (
    <div className={main.main}>
      <div className={list_view.list_view}>
        <span className={list_view.list__header}>Inventory acts</span>
        <ul>
          <li>Inventory act 17.01.17 09:12</li>
          <li className={list_view.selected}>Inventory act 17.01.17 10:12</li>
          <li>Inventory act 17.01.17 11:12</li>
          <li>Inventory act 17.01.17 12:12</li>
          <li>Inventory act 17.01.17 13:12</li>
        </ul>
      </div>
      <div className={document_container.document_container}>
        <div className={document__header.document__header}>
          <span className={document__header.header__type}>Inventory act</span>
          <span className={document__header.header__id}>17.01.17 10:12</span>
        </div>
        <div className={document__table.document__table}>
          <table>
            <thead>
              <tr className="product">
                <th className={document__table.line_number}><span></span></th>
                <th className={document__table.text}><span>Product name</span></th>
                <th className={document__table.number}><span>Expected</span></th>
                <th className={document__table.number}><span>Actual</span></th>
                <th className={document__table.number}><span>Divergence</span></th>
              </tr>
            </thead>
            <tbody>
              <tr className="product">
                <td className={document__table.line_number}><span>1</span></td>
                <td className={document__table.text}><span>HP ProBook</span></td>
                <td className={document__table.number}><span>1</span></td>
                <td className={document__table.number}><span>1</span></td>
                <td className={cn(document__table.number, document__table.results)}><span></span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>2</span></td>
                <td className={document__table.text}><span>Apple Macbook</span></td>
                <td className={document__table.number}><span>12</span></td>
                <td className={document__table.number}><span>12</span></td>
                <td className={cn(document__table.number, document__table.results)}><span></span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>3</span></td>
                <td className={document__table.text}><span>Asus Gaming Laptop</span></td>
                <td className={document__table.number}><span>2</span></td>
                <td className={document__table.number}><span>1</span></td>
                <td className={cn(document__table.number, document__table.results)}><span>-1</span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>4</span></td>
                <td className={document__table.text}><span>HTC Hero</span></td>
                <td className={document__table.number}><span>4</span></td>
                <td className={document__table.number}><span>5</span></td>
                <td className={cn(document__table.number, document__table.results)}><span>+1</span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>5</span></td>
                <td className={document__table.text}><span>Samsung Galaxy</span></td>
                <td className={document__table.number}><span>2</span></td>
                <td className={document__table.number}><span>2</span></td>
                <td className={cn(document__table.number, document__table.results)}><span></span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>6</span></td>
                <td className={document__table.text}><span>Apple iPhone</span></td>
                <td className={document__table.number}><span>5</span></td>
                <td className={document__table.number}><span>5</span></td>
                <td className={cn(document__table.number, document__table.results)}><span></span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>7</span></td>
                <td className={document__table.text}><span>Sony Xperia</span></td>
                <td className={document__table.number}><span>3</span></td>
                <td className={document__table.number}><span>3</span></td>
                <td className={cn(document__table.number, document__table.results)}><span></span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>8</span></td>
                <td className={document__table.text}><span>JavaScript book</span></td>
                <td className={document__table.number}><span>3</span></td>
                <td className={document__table.number}><span>3</span></td>
                <td className={cn(document__table.number, document__table.results)}><span></span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>9</span></td>
                <td className={document__table.text}><span>Design Patterns book</span></td>
                <td className={document__table.number}><span>1</span></td>
                <td className={document__table.number}><span>2</span></td>
                <td className={cn(document__table.number, document__table.results)}><span>+1</span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>10</span></td>
                <td className={document__table.text}><span>Scala book</span></td>
                <td className={document__table.number}><span>1</span></td>
                <td className={document__table.number}><span>1</span></td>
                <td className={cn(document__table.number, document__table.results)}><span></span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>10</span></td>
                <td className={document__table.text}><span>Clean Code book</span></td>
                <td className={document__table.number}><span>2</span></td>
                <td className={document__table.number}><span>2</span></td>
                <td className={cn(document__table.number, document__table.results)}><span></span></td>
              </tr>
              <tr className="product">
                <td className={document__table.line_number}><span>+</span></td>
                <td className={document__table.text}><span></span></td>
                <td className={document__table.number}><span></span></td>
                <td className={document__table.number}><span></span></td>
                <td className={cn(document__table.number, document__table.results)}><span></span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={document__controls.document__controls}>
          <a href="#" className={cn(document__controls.button, document__controls.button_default)}>Save</a>
          <a href="#" className={document__controls.button}>Cancel</a>
        </div>
      </div>
      <div className={nav.nav}>
        <ul>
          <li>
            <a href="#"><img src="img/a.png" role="presentation" /><span>Arrival</span></a>
          </li>
          <li>
            <a href="#"><img src="img/d.png" role="presentation" /><span>Dispatch</span></a>
          </li>
          <li>
            <a href="#"><img src="img/p.png" role="presentation" /><span>Products</span></a>
          </li>
          <li>
            <a href="#" className="current"><img src="img/i.png" role="presentation" /><span>Inventory</span></a>
          </li>
          <li>
            <a href="#"><img src="img/r.png" role="presentation" /><span>Report</span></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
