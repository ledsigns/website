import React, { Component } from "react";
import ClickAmountChart from '../organisms/ClickAmountChart'
import UserAmountChart from '../organisms/UserAmountChart'

export default class clickAmountChart extends Component {


    render() {
        return (
            <>
                <ClickAmountChart />
                {/* <UserAmountChart /> */}
            </>
        );
    }
}
