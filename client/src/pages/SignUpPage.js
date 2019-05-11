import React, { Component } from "react";
import { SignUp } from "../components/SignUp";
import API from "../utils/API";
import M from 'materialize-css';

class SignUpPage extends Component {
    constructor(props){
        super(props)
     this.handleFormSubmit =  this.handleFormSubmit.bind(this);
    }
    state = {
        email: "",
        password: "",
        pswRepeat: "",
        error: ''

    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit (event) {
        event.preventDefault(); debugger
         if (this.state.password.length < 8 ){
            this.setState({error: 'Sorry cannot sign up'}) 
         } else{
            API.createAccount(this.state.email, this.state.password)
         }
        

    };
    componentDidMount(){
        M.FormSelect.init(document.querySelectorAll('select'));
    };

    render() {
        return (
            <div className="container">
                <form action="action_page.php" style={{ border: "1px solid #ccc" }}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        {this.state.error && M.toast({ html:this.state.error}) }
                        <p>Please fill in this form to create an account.</p>
                        <hr/>

                        <label htmlFor="email"><b>Email</b></label>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.email}
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            id="email"
                            required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.password}
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            id="password"
                            required />

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.pswRepeat}
                            type="password"
                            placeholder="Repeat Password"
                            name="pswRepeat"
                            id="passwordRepeat"
                            required />

                        <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

                        <div className="clearfix">
                            <a href="/"><button
                                type="button"
                                className="cancelbtn">Cancel</button></a>
                            <button
                                onClick={this.handleFormSubmit}
                                type="submit"
                                className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
export default SignUpPage