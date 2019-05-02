import React, { Component } from "react";
import ClickAmountChart from '../organisms/ClickAmountByProduct'
import ClickAmountByMonth from '../organisms/ClickAmountByMonth'
import NewUserByMonth from '../organisms/NewUserByMonth'


export default class clickAmountChart extends Component {


    render() {
        return (
            <>
                {/* <ClickAmountByMonth /> */}
                <ClickAmountChart />
                {/* <NewUserByMonth /> */}
            </>
        );
    }
}
