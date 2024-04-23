import React from "react";

// function MainBox(){
//     return(
//         <>

//         </>
//     )
// }
class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            message: null,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.save = this.save.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }

    save(event) {
        alert(
            `Name: ${this.state.name}, Email: ${this.state.email}, Message: ${this.state.message} `
        );
    }

    render() {
        return (
            <div>
                <form className="row mail-box-form">
                    <div className="form-block col-md-6">
                        <label htmlFor="name" >
                            Name
                        </label>
                        <input value={this.state.name} onChange={this.handleChangeName} type="text" id="name" name="name" />
                    </div>
                    <div className="form-block col-md-6">
                        <label htmlFor="email" >
                            Email
                        </label>
                        <input value={this.state.email} onChange={this.handleChangeEmail} type="email" id="email" name="email" />
                    </div>
                    <div className="form-block col-md-12">
                        <label htmlFor="message" >
                        Hello Iam Intrested in..
                        </label>
                        <textarea value={this.state.message} onChange={this.handleChangeMessage} id="message" name="message" rows={5}></textarea>
                    </div>
                    <div className="col-md-12 submit-btn" >
                        <button className="btn btn-default" onClick={this.save} type="submit">
                            Send Now
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default MainBox;

