
import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link  } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar =()=> {
    const [agentProperties, setAgentProperties] = useState([])
    
    useEffect(()=>{
      getAgentProperties()
    },[])

    const getAgentProperties = async () => {
      try {
        let res = await axios.get('/api/properties')
        console.log(res)
      } catch (err) {
        console.log(err)
        console.log(err.response)
      }
    }
    return (
      <Menu>
       
          <Link to="/">
            <Menu.Item>
               Available
            </Menu.Item>
          </Link>

          <Link to="/cities">
            <Menu.Item>
               Cities
            </Menu.Item>
          </Link>
          <Link to="/homes">
            <Menu.Item>
               Find Home
            </Menu.Item>
          </Link>
          <Link to="/prices">
            <Menu.Item>
               Prices
            </Menu.Item>
          </Link>
          
          <Link to='/examples'>
            <Menu.Item>Examples</Menu.Item>
          </Link>

      </Menu>
    );
}

export default Navbar;