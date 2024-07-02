"use client";

import styles from "./page.module.css";
import { useCartList } from "../../components/cartlist-hooks";
import CartDisplay from "../../components/CartDisplay";

export default function Page()
{
    const { cartList } = useCartList();

    if (!cartList.length) return;

    const getTotal = () => {
        let sum = 0;
        cartList.forEach(e => {
            sum += e.price * e.qty;
        });
        return sum;
    }

    const total = getTotal().toLocaleString('en-CA', { style: 'currency', currency: 'CAD'});

    return(
        <main>
            <div className={styles.pagetitlewrapper}>
                <h1 className={styles.pagetitle}>
                    <span className="base" data-ui-id="page-title-wrapper">Shopping Cart</span>
                </h1>
            </div>
            <div className="columns">
                <div className="column main">
                    {/* encompasses this page's main content */}
                    <div className={styles.cartcontainer}>
                        {/* the column to the right of the page */}
                        <div className={styles.cartsummary}>
                            <div className="cart-discount">
                                <div className="block-giftcard" data-collapsible="true" role="tablist">
                                    <div data-role="title">
                                        <strong id="block-giftcard-heading" className={styles.giftcardheading}>Gift Cards</strong>
                                    </div>
                                    {/* TODO: add content */}
                                </div>
                            </div>
                            <div className="cart-totals">
                                <div className="table-wrapper">
                                    <table className="data table totals">
                                        {/*<caption className="table-caption">Total</caption>*/}
                                        <tbody>
                                            <tr className={styles.totalsub}>
                                                <th className="mark" scope="row">Subtotal</th>
                                                <td className="amount">
                                                    <span className="price" data-th="Subtotal">{total}</span>
                                                </td>
                                            </tr>
                                            <tr className="grand totals">
                                                <th className="mark" scope="row">
                                                    <strong data-bind="i18n: title">Order Total</strong>
                                                </th>
                                                <td data-bind="attr: {'data-th': title}" className="amount" data-th="Order Total">
                                                    <strong><span className="price" data-bind="text: getValue()">{total}</span></strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <ul className="checkout methods items checkout-methods-items">   
                                <li className={styles.checkoutlist}>  
                                    <button type="button" data-role="proceed-to-checkout" title="Proceed to Checkout" className={styles.checkoutbutton}>
                                        <span>Proceed to Checkout</span>
                                    </button> 
                                </li>                 
                            </ul>
                        </div>
                        {/* shows what's in the cart */}
                        <form action="#" method="post" className={styles.cartform}>
                            <div className="cart table-wrapper">
                                <table id="shopping-cart-table" className={styles.carttable}>
                                    {/*<caption className="table-caption">Shopping Cart Items</caption>*/}
                                    <thead>
                                        <tr>
                                            <th className={`${styles.col} ${styles.item}`}><span>Product</span></th>
                                            <th className={`${styles.col} ${styles.price}`}><span>Price</span></th>
                                            <th className={`${styles.col} ${styles.qty}`}><span>Qty</span></th>
                                            <th className={`${styles.col} ${styles.subtotal}`}><span>Subtotal</span></th>
                                            <th className={`${styles.col}`}><span></span></th>

                                        </tr>
                                    </thead>
                                    <tbody className="cart item">
                                        {cartList.map(ci=>{
                                            /*alert(`name is ${ci.name}`);*/
                                            return (<CartDisplay 
                                                key={ci.id}
                                                id={ci.id}
                                                name={ci.name}
                                                price={ci.price}
                                                qty={ci.qty}
                                            />)
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}