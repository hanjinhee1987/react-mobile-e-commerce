import React from 'react'
import {Link} from "react-router-dom";
function CartTotal({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <>
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-10 mt-2 col-sm-8 text-capitalize text-right d-flex flex-column align-items-center justify-content-lg-end">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={clearCart}>clear cart</button>
                    </Link>
                    <h5>
                        <span className="text-title">subtotal :</span>
                        <strong>$ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">tax :</span>
                        <strong>$ {cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">total :</span>
                        <strong>$ {cartTotal}</strong>
                    </h5>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartTotal