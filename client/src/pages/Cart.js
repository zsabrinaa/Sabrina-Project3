import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Image } from "../components/Img";

class Cart extends Component {
    state = {
        items: []
      };


componentDidMount() {
    this.loadCart();
  }
  loadCart = () => {
    API.getCartItems()
      .then(res => {
        this.setState({ items: res.data})
      })
      .catch(err => console.log(err));
  };

  render(){
      return(
        <div className="container">
        <div className="row">
          {this.state.items.length ? (
            this.state.items.map(item => {
              return (
                <div className="col s3">
                  <Link to={"/shop/" + item._id}>  
                    <Image key={item._id}
                      src={item.src}
                    />
                     </Link>
                     <div> {item.name}</div>
                     <div>
                    <h5>Quantity:{item.quantity}</h5>
                    <h5>Size:{item.size}</h5>
                    <h5>Price:  ${item.price}</h5>
                    </div>
                </div>
              )
            })
          ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
        <div className="row">
        <div className="col s6">
        <button 
                    // onClick={props.handleFormSubmit}
                    type="submit" 
                    className="placeOrderbtn">Place Your Order</button>
        </div>
        </div>
       
      </div>
      )
  }
}

export default Cart;