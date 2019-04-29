import React, { Component } from "react";
import ClickAmountChart from '../organisms/ClickAmountByProduct'
import UserAmountChart from '../organisms/UserAmountChart'
import ClickAmountByMonth from '../organisms/ClickAmountByMonth'

export default class clickAmountChart extends Component {


    render() {
        return (
            <>
                <ClickAmountByMonth />
                <ClickAmountChart />
            </>
        );
    }
}
