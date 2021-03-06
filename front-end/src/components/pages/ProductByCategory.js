import React, { Component } from "react";
import "../styles/pages/Home.scss";
import Gallery from "../atoms/Gallery";
import { getProductByCategory } from "../../api/product";
export default class HomePage extends Component {
    state = {
        products: null
    };

    async componentDidMount() {
        let categoryId = this.props.match.params.categoryId;
        console.log(`categoryId= ${categoryId}`)
        let products = await getProductByCategory(categoryId);
        console.log(`products =` + JSON.stringify(products))
        let galleryProduct = products.products.map(element => {
            console.log("element :" + JSON.stringify(element));
            return {
                caption: element.name,
                url: `/product/${element._id}`, // where generate the url for next page
                imgPath: element.productDetail.images[0].link
            };
        });
        console.log("products.products");
        console.log(products.products);
        this.setState({ products: galleryProduct });
    }

    render() {
        console.log(`updated state is ` + JSON.stringify(this.state.products));
        return (
            <>
                {this.state.products ? (
                    <Gallery numberPerPage={10} width="90%" data={this.state.products} />
                ) : (
                        false
                    )}
            </>
        );
    }
}
