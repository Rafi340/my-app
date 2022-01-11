import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  var style={
    color: 'red',
    backgroundColor: 'black'
  }
  const khalifa=['Abu Bokor (RA)', 'Umar(RA)' , 'Usman(RA)' , 'Ali(RA)']
  const products=[{ 
    name:"PhotoShop", price:"$09.9" },
    {name:"Adobe XD", price:"$02.9"},
    {name: "illustrator", price:"01.1"}]
  return (
    <div className="App">
      <header className="App-header">
      <p>React Developer</p>
      <Users></Users>
      <Counter></Counter>

      <ul>
        {
          khalifa.map(khalifa=> <li>{khalifa}</li>)
        }
        {
          products.map(product=> <li>{product.name}</li>)
        }
        
      </ul>
      {
          products.map(product => <Product product={product}></Product> )
        }
      {/* <li>{khalifa[0]}</li>
      <li>{khalifa[1]}</li>
      <li>{khalifa[2]}</li>
      <li>{khalifa[3]}</li>

       <Product product={products[0]}></Product>
       <Product product={products[1]}></Product> */}
      </header>
    </div>
  );
}
function Users(props){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic User {users.length} </h3>
      {
        console.log(users)
      }
      {
        users.map(user=> <li>{user.name}</li>)
        
      }
    </div>
  )
}

function Product(props){
  const productStyle={
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: 'lightgray',
    height: "200px",
    weight: "200px",
    float: "left" 

  }
  console.log(props)
  const {name , price}=props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price} </h5>
      <button>Buy Now</button>
    </div>
  )
}
function Counter(props){
  const [count, setCount]=useState(5);
  const handleIncrease =()=>{setCount(count +1)};
    const handleDecrease =()=>{setCount(count - 1);
  };
  return(
    <div>
      <h2>count : {count}</h2>
      <button onMouseMove={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
export default App;
