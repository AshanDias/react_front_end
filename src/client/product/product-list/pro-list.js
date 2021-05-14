import React, { useState, useEffect } from 'react'
import Parser from 'html-react-parser';
import './pro-list.css';
var html = "";

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.fetchAllProducts();
  }

  render() {
    return (
      <div class="container">
        <div id="itemCard" class="row">{Parser(html)}</div>


        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
            </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }


  fetchAllProducts = () => {
    var productList = [
      {
        "id": 1,
        "title": 'TOSHIBA Analog 32" LED TV',
        "subTitle": 'PRODUCT CODE: THTV32L2900VE',
        "img": 'asset/products/1.jpeg',
        "price": '29.999'
      },
      {
        "id": 2,
        "title": 'Haier 32" LED TV',
        "subTitle": 'PRODUCT CODE: HRTV32K6000',
        "img": 'asset/products/2.jpeg',
        "price": '34,999'
      },
      {
        "id": 3,
        "title": 'LG 32” LED TV',
        "subTitle": 'PRODUCT CODE: LGTV32LM550BPTA',
        "img": 'asset/products/3.jpeg',
        "price": '49,999'
      },
      {
        "id": 4,
        "title": 'LG 43" LED TV',
        "subTitle": 'PRODUCT CODE: LGTV43LM5500PTA',
        "img": 'asset/products/4.jpeg',
        "price": '99,999'
      },
      {
        "id": 5,
        "title": 'iPhone SE White - 64GB (2020)',
        "subTitle": 'PRODUCT CODE: APPIPSE2MHGQ3ZPA',
        "img": 'asset/products/5.jpeg',
        "price": '109,999'
      },
      {
        "id": 6,
        "title": 'iPhone SE Red - 128GB (2020)',
        "subTitle": 'PRODUCT CODE: APPIPSE2MXD22ZPA',
        "img": 'asset/products/6.jpeg',
        "price": '129,999'
      },
      {
        "id": 7,
        "title": 'Apple iPad (2020) 10.2 Wi-Fi + Cellular 128GB - Gold',
        "subTitle": 'PRODUCT CODE: APPIPMYMN2ZPA',
        "img": 'asset/products/7.jpeg',
        "price": '154,999'
      },
      {
        "id": 8,
        "title": 'iPhone 12 Mini - Black 128GB with FREE USB-C Power Adapter',
        "subTitle": 'PRODUCT CODE: APPIP12MGE33ZPA-FG',
        "img": 'asset/products/8.jpeg',
        "price": '204,999'
      },
      {
        "id": 9,
        "title": 'APPLE Mac Mini Space Gray/3.6GHZ Quad Core 8Gen I3/8GB/128GB',
        "subTitle": 'PRODUCT CODE: APPPCLMRTR2PAA',
        "img": 'asset/products/9.jpeg',
        "price": '165,999'
      },

    ]

    html = "";
    productList.forEach(element => {
      html += '<div class="card col-lg-3 mt-1">';
      html += '  <img class="card-img-top p-1" src="' + element.img + '" style="margin-left:auto;margin-right:auto;width:50%" alt="" />';
      html += '  <div class="card-body">';
      html += '    <h5 class="card-title">' + element.title + '</h5>';
      html += '    <h6 class="card-sub-title text-muted">' + element.subTitle + '</h6>';
      html += '    <p class="card-text text-danger">Rs.' + element.price + '</p>';
      html += '  <div class="row" style="margin-left:auto;margin-right:auto;"> ';
      html += '      <button type="button" class="btn btn-sm btn-primary mr-1"><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button> <button type="button" class="btn btn-sm btn-success" data-toggle="modal" data-target="#exampleModalCenter"><i class="fa fa-eye" aria-hidden="true"></i></button></div>';
      html += '  </div>';
      html += '</div>';
    });

  }

}




export default ProductList;
