import React from "react";
import { Link } from 'react-router-dom'; 

const Item = ({ Links, title }) => {
  return (
    
    <ul>
         <h1 className="mb-1 font-semibold">{title}</h1>
            {Links.map((link) => (
              <li key={link.name}>
  
        <Link className="text-white hover:text-sky duration-300 font-sans cursor-pointer" to={link.link}> 
          <div className="text-left text-xl"><ion-icon   name={link.namee}></ion-icon>&nbsp;&nbsp;&nbsp;&nbsp;{link.contacts}</div>
           {link.name}
        
</Link>
          
        </li>
      ))}
    </ul>
  );
};

export default Item;
