import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/60831/iphone-6-3-400x460.png"
              alt="Iphone 6"
            />
            <div className="caption">
              <h3>Iphone 6 plus</h3>
              <p>16.000.000 VNĐ</p>
              <p>
                <button type="button" className="btn btn-primary">
                  Mua Hàng
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
