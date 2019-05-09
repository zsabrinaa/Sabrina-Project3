import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import {Image} from "../components/Img";

class Index extends Component {
  state = {
    
  };

  // searchBooks = query => {
  //   API.search(query)
  //     .then(res => this.setState({ books: res.data.items }))
  //     .catch(err => console.log(err));
  // };

  // saveBook = (title, author, src,synopsis) => {
  //   API.saveBook(title, author, src,synopsis)
  //     .then(
  //       this.setState({
  //         title: this.state.title,
  //         author: this.state.author,
  //         src: this.state.src,
  //         synopsis: this.state.synopsis
  //       })
  //     ).catch(err => console.log(err));
  // };
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchBooks(this.state.search);
  // };

  render() {
    return (     
      <div className="container">
      <main>
        <div className="row">
        </div>
        <div className='row'>
          <div className="col m6">
            <Image
            src={"https://ae01.alicdn.com/kf/HTB1aLg.lmMmBKNjSZTEq6ysKpXaP/sleeveless-mother-daughter-dresses-mommy-and-me-clothes-family-look-matching-outfits-clothes-mom-daughter-summer.jpg"}
          />
          </div>
          <div className="col m6">
            <Image
            src={"https://ae01.alicdn.com/kf/HTB15QfxlBjTBKNjSZFuq6z0HFXaq/sleeveless-mother-daughter-dresses-mommy-and-me-clothes-family-look-matching-outfits-clothes-mom-daughter-summer.jpg"}
          /> 
          </div>    
        </div>
        {/* end top img */}
        <div className="row">
        <div className="col m12">
            Shop by type
        </div>
        </div>
        {/* end text */}
        <div className="row">
         <div className="col m3">
         <Image
         src={"https://ae01.alicdn.com/kf/HTB1hdwWRpXXXXa5XXXXq6xXFXXXh/2017-Hot-Selling-Mother-and-Daughter-Dress-Summer-Denim-T-shirt-Tops-Leopard-Skirt-Woman-Clothes.jpg_640x640.jpg"}
         />
         </div>
          <div className="col m3">
         <Image
         src={"https://ae01.alicdn.com/kf/HTB1GoDedAfb_uJkSmRyq6zWxVXa0/Family-Matching-Outfits-Father-Mother-Daughter-Son-Clothes-Look-tshirt-daddy-mommy-and-me-dress-mom.jpg_640x640.jpg"}
         />
         </div>
         <div className="col m3">
         <Image
         src={"https://ae01.alicdn.com/kf/HTB1lDY4XsfrK1RkSmLyq6xGApXa4/Mother-daughter-dresses-2019-Vintage-Floral-Mini-Dress-Mom-and-daughter-dress-Mother-and-daughter-clothes.jpg_640x640.jpg"}
         />
         </div>
         <div className="col m3">
         <Image
         src={"https://ae01.alicdn.com/kf/HTB1sYwkXHuWBuNjSszgq6z8jVXav/Family-Matching-Outfits-Mother-and-Daughter-swimsuit-Clothing-Mom-Girls-Swimwear-mommy-me-bikini-look-dresses.jpg_640x640.jpg"}
         />
         </div>
         
        </div>
        </main>
      </div>

    );
  }
}

export default Index;
