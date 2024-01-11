/* eslint-disable */

import React from 'react';
import "./pdfStyle.css"
import logo from "./optiprime.jpeg"
import paid from "./paid.webp"

const PDFComponent = ({ dynamicData }) => {
    
  return (

        <div class="main-content">
            <img src={paid} class="img-paid"/>
    <div class="section-1">
        <div class="section-1-header">
            <h1>INVOICE</h1>
            <div class="text-inside-sec1">
    <b>My company address</b>
    <p>123, hello street</p>
    <p>New York, 121001</p>
            </div>
        </div>
        <div class="logo-img">
    <img src={logo} alt="Img not available" />
        </div>
    </div>
    
    <div class="section-2">
    <div class="sec-2-bill">
        <b>BILL TO</b>
        <p>John Smith</p>
        <p>2 Court Square</p>
        <p>New York, NY 12210</p>
    </div>    
    <div class="sec-2-detail">
        <ul>
            <b><li>Invoice #</li></b>
            <b><li>Invoice Date</li></b>
            <b><li>Status</li></b>
        </ul>
        <ul>
            <li>#122-23-23-12-2</li>
            <li>11/02/2023</li>
            <li>Paid</li>
        </ul>
    </div>    
    </div>
    
    <div class="section-3">
        <table>
        
    
        <tr>
        <th>QTY</th>
        <th>DESCRIPTION</th>
        <th>TIME</th>
        <th>UNIT PRICE</th>
    </tr>
        
        <tr>
            <td>1</td>
            <td>Top-up made through net banking</td>
            <td>TIME</td>
    
            <td>100.00</td>
        </tr>
    </table>
    
    </div>
    <div class="section-4">
        <div>
            <h3>TOTAL</h3>
            <p>$ 1333.20</p>
        </div>
    
    </div>
    <hr/>
 </div>
  );
};

export default PDFComponent;
