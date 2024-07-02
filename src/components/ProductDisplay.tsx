"use client";

import Image from "next/image";
import { useCartList } from "./cartlist-hooks";

//import styles from "../app/products/page.module.css";

export default function ProductDisplay({ id, name, description, department, price, thumb, qty }){
    const { addCartItem } = useCartList();

    const handleClick = () => {
        addCartItem(id, name, description, department, price, thumb, qty);
        /*alert(`name is ${name}`);*/
    }

    return (
                                        
        <div id="displaycontainer">
            <Image src={thumb} width={180} height={180} alt=""/>
            <strong>
                <a href="#" id="productname">{name}</a>
            </strong>
            {/* TODO: star review widget */}
            <strong id="productprice"> ${price} </strong>
            {/* TODO: autoship badge */}
            <button id="addtocartbutton"  onClick={handleClick}>
                Add To Cart
            </button>
        </div>
    );

}