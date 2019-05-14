import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { Image } from "../components/Img";
import { AddBtn } from "../components/AddToCartbtn";

class Detail extends Component {
    state = {
        item: {}
    };

    componentDidMount() {
        API.getItem(this.props.match.params.id)
            .then(({ data }) => {
                this.setState({
                    item: data
                })
            }).catch((err => console.log(err)))
    }
    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        
                        <Image
                            src={this.state.item.src}
                        />
                    </div>
                    <div className="col s6">
                    <h3>{this.state.item.name}</h3>
                        {this.state.item.size ? (
                            Object.keys(this.state.item.size).map((size, i) => {
                                const price = this.state.item.size[size]
                                return <div>
                                    {size}=   ${price}
                                </div>
                            })
                        ) : ""}
                        <AddBtn/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail;