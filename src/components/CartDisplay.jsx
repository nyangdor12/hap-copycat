import styles from "../app/checkout/page.module.css";
import { GrClose } from "react-icons/gr";
import { useCartList } from "./cartlist-hooks";

export default function CartDisplay({ id, name, price, qty}) {

    const { removeCartItem, updateQuantity } = useCartList();

    const deleteItem = () => {
        removeCartItem(id);
        /*alert(`what is ${qty}`)*/
    }

    const updateItem = e =>{
        const num = parseInt(e.target.value);
        updateQuantity(id, num);
    }

    return (
        <tr className="item-info">
            <td data-th="Product" className={`${styles.col} ${styles.item}`}>
                {/* TODO: Link to specific product */}
                {/* item details */}
                <div className="product-item-details">
                    <strong> <a className={styles.productlink} href="#">{name}</a> </strong>
                </div>
            </td>
            <td className={`${styles.col} ${styles.price}`} data-th="Price">   
                <span className="price-excluding-tax" data-label="Excl. Tax"> 
                    <span className="cart-price"> 
                        <span className="price">${price.toLocaleString('en-CA', { style: 'currency', currency: 'CAD'})}</span>
                    </span> 
                </span>  
            </td>
            <td className={`${styles.col} ${styles.qty}`} data-th="Qty">
                <div className={styles.fieldqty}>
                    <label className="label" htmlFor="cart-15344351-qty"><span>Qty</span></label> 
                    <div className={styles.qtyinputwrapper}>
                        <input id="cart-15344351-qty" name="cart[15344351][qty]" onChange={updateItem} data-cart-item-id="82005" value={qty} type="number" title="Qty" className={styles.qtyinput} data-role="cart-item-qty"/>
                            
                    </div>
                </div>
            </td>
            <td className={`${styles.col} ${styles.subtotal}`} data-th="Subtotal">    
                <span className="price-excluding-tax" data-label="Excl. Tax"> 
                    <span className="cart-price"> 
                        <span className="price">{(price * qty).toLocaleString('en-CA', { style: 'currency', currency: 'CAD'})}</span>
                    </span> 
                </span>  
            </td>
            <td className={`${styles.col}`} data-th="Actions">    
                <button className={styles.deleteItem} onClick={deleteItem}><GrClose /></button> 
            </td>
        </tr>        
    );
}