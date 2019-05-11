import React, { Component } from "react";
import API from "../utils/API";


class All extends Component{
    state = {
        items : []
      };


      componentDidMount(){
        this.loadItems();
      }
      loadItems = () => {
        API.getItems()
          .then(res => {
              console.log(res,'check here   ')
            this.setState({ items: res.data})
          })
          .catch(err => console.log(err));
      };
      render(){
        return(
            <h1>hello</h1>
        )
        
    }
    
}

export default All;