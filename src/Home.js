import { useState } from "react";

const Home = () => {

    // let name = 'mario';
    const [name,setName] = useState('prabath');
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
       setName('udayanga');
       setAge(30);
    }

    const handleClickAgain = (name,e) => {
        console.log('hello '+name,e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            {/* <button onClick={(e) => handleClickAgain('mario',e)}>Click</button> */}
            <p>{name} is {age} years old</p>
        </div>
     );
}
 
export default Home;