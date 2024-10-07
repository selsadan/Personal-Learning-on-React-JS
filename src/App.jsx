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

import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
