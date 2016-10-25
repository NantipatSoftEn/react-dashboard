import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

// Material-UI
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import LocalMall from 'material-ui/svg-icons/maps/local-mall';

import './product.scss';

class Item extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            styles: {
                icon: {
                    marginRight: '6px'
                },
                chip: {
                    margin: 4,
                }
            }
        }
    }

    static propType = {
        pproductTitle: PropTypes.string
    }

    render () {
        return (
            <div className="col-lg-3 col-xs-12">
                <div className="small-box bg-red">
                    <div className="inner">
                        <div className="pull-left">
                            <h4>
                                <i className="ion-cube"
                                    style={this.state.styles.icon}></i>
                                {this.props.productTitle}
                            </h4>
                        </div>
                        <div className="pull-right">
                            <button type="button"
                                className="btn edit-btn btn-primary btn-xs">
                                Edit
                            </button>
                        </div>

                        <div className="clearfix"></div>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="img-thumbnail product-image-container">
                                    <div className="price-floating">$100</div>
                                    <img
                                        className="productThumbnail"
                                        src="/public/images/products/coffee.png" />
                                </div>

                                <div className="clearfix"></div>

                                <div>
                                    <div className="pull-left">
                                        <Chip style={this.state.styles.chip}>
                                            <Avatar color="#444" icon={<LocalMall />} />
                                            best-seller
                                        </Chip>
                                    </div>

                                    <div className="pull-left">
                                        <Chip style={this.state.styles.chip}>
                                            <Avatar color="#444" icon={<LocalMall />} />
                                            electronic
                                        </Chip>
                                    </div>

                                    <div className="pull-left">
                                        <Chip style={this.state.styles.chip}>
                                            <Avatar color="#444" icon={<LocalMall />} />
                                            highlight
                                        </Chip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item
