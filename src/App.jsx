// Creating and Nesting Components 

// function MyButton (){
//   return(
//     <button>I'm a button</button>
//   );
// }


// export default function App (){
//   return(
//     <div>
//       <h1>Welcome to My Web</h1>
//       <MyButton />
//     </div>
//   );
// }'


// Writing Markup with JSX

// export default function App (){
//   return(
//     <>
//       <h1>About</h1>
//       <p>Hello there. <br /> How do you do?</p>
//     </>
//   );
// }


//Adding Styles 

// import './App.css';

// export default function App (){
//   return(
//     <img 
//       className='Avater' src='https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-768x432.webp'
//     />
//   );
// }


// Displaying Data

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// Conditional renderToString

// <div>
//   {isLoggedIn ? (
//     <AdminPanel />
//   ) : (
//     <LoginForm />
//   )}
// </div>


// Rendering List

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );

//   return (
//     <ul>{listItems}</ul>
//   );
// }


// Responding to Events

// export default function App() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }


// Updating the Screen 

// import { useState } from 'react';

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }


//Sharing Data Between Components

// import { useState } from 'react';

// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }


// Build a static version of React Here learning never ends!

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <h2>Keep Reading</h2>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
