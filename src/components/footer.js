import React from "react";


class Footer extends React.Component{
    render() {
    return (
        <div>
            <h1>MY FOOTER</h1>
            {this.props.paragraf()}
            <h2>belajar ngoding</h2>
        </div>
        )
    }
}

export default Footer;