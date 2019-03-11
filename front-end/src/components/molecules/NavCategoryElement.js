import React, { Component } from "react";
import "../styles/molecules/NavProductSection.scss";

export default class NavProductElement extends Component {

    render() {
        return (
            <div
                className="box"
                onMouseEnter={() => {
                    console.log(`this.props.caption is ` + this.props.caption)
                    this.props.onHoverSub(
                        this.props.imgPath
                    )
                    this.props.onHoverMain(
                        this.props.index
                    )
                }
                }
            >
                <a href={this.props.url} style={{ color: 'black', textDecoration: 'none' }} ><p>{this.props.caption}</p></a>
            </div >
        );
    }
}