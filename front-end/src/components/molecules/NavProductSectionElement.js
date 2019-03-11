import React, { Component } from "react";
import "../styles/molecules/NavProductSection.scss";

export default class NavProductSectionElement extends Component {


    render() {
        return (
            <div
                className="box"
                onMouseEnter={() => {
                    console.log(`this.props.caption is ` + this.props.caption)
                    this.props.onHoverSub(
                        this.props.imgPath
                    )
                }
                }
            >

                <p>{this.props.caption}</p>
            </div >
        );
    }
}
