"use client";

import styles from "./page.module.css";
import ProductDisplay from "../../components/ProductDisplay";
import { useCartList } from "../../components/cartlist-hooks";
import { generateFakeProducts } from "../../utils/generateFakeProducts";
import { useState, useEffect } from "react";

export default function Page()
{
    const [ productList, setProductList ] = useState([] as any);
    //const { cartList } = useCartList();

    useEffect( ()=>{
        const loadProducts = generateFakeProducts(10);
        setProductList(loadProducts);
    }, []);

    return(
        <main id="maincontent" className="page-main">
            <div className={styles.categoryview}><h1 className={styles.pagetitle}>Products</h1></div>
            {/* page main content */}
            <div className={styles.columns}>
                <div className={styles.maincolumn}>
                    <p className={styles.toolbaramount} id="toolbar-amount"> <span className="toolbar-number">167</span> items </p>
                    <div className={styles.toolbar}>
                        <div className="toolbar-sorter sorter">
                            <label className={styles.sorterlabel} htmlFor="sorter">Sort By</label> 
                            <select id="sorter" data-role="sorter" className={styles.sorteroptions}>
                                <option value="rating_summary">Top Rated</option> 
                                <option value="saving">Biggest Saving</option> 
                                <option value="price_asc">Price: low to high</option>
                                <option value="created_at"></option>
                            </select>  
                        </div>
                        <a title="Set Descending Direction" href="#" className={styles.descdirection} data-role="direction-switcher" data-value="desc">
                            <span>Set Descending Direction</span>
                        </a> 
                    </div>
                    <div className={styles.productsgrid}>
                        {productList.map( prod => 
                            {
                                /*alert(`prod id is ${prod.id}`);*/
                                return (
                                    <ProductDisplay 
                                        key={prod.id}
                                        id={prod.id}
                                        name={prod.name}
                                        description={prod.desc}
                                        department={prod.depart}
                                        price={prod.price}
                                        thumb={prod.thumb}
                                        qty={prod.qty}
                                    />
                                );
                            }

                        )}
                        
                    </div>
                </div>
                <div className={styles.sidebar}>
                    <div className="block filter" id="layered-filter-block">
                        {/* TODO: implement title portion */}
                        {/* sidebar content */}
                        <strong className={styles.filtersubtitle}>Shopping Options</strong>
                        <div className={styles.filtercontents}>
                            <div className={styles.filteroption} id="narrow-by-list">
                                <div data-role="trigger" className={styles.filteroptiontitle}>Category</div>
                                <div data-role="content" className={styles.filteroptioncontent}>
                                    <ol className={styles.nopadding}>
                                        <li> 
                                            <a className={styles.filteroptionitem} href="https://www.homesalive.ca/new-arrivals.html?cat=1986" rel="nofollow"> 
                                                Dog
                                            </a> 
                                        </li>
                                        <li> 
                                            <a className={styles.filteroptionitem} href="https://www.homesalive.ca/new-arrivals.html?cat=1987" rel="nofollow"> 
                                                Cat  {/*<span className="count">37 <span className="filter-count-label">items</span></span>*/}  
                                            </a> 
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className={styles.filteroption} id="narrow-by-list">
                                <div data-role="trigger" className={styles.filteroptiontitle}>Category</div>
                                <div data-role="content" className={styles.filteroptioncontent}>
                                    <ol className={styles.nopadding}>
                                        <li> 
                                            <a className={styles.filteroptionitem} href="https://www.homesalive.ca/new-arrivals.html?cat=1986" rel="nofollow"> 
                                                Dog
                                            </a> 
                                        </li>
                                        <li> 
                                            <a className={styles.filteroptionitem} href="https://www.homesalive.ca/new-arrivals.html?cat=1987" rel="nofollow"> 
                                                Cat  {/*<span className="count">37 <span className="filter-count-label">items</span></span>*/}  
                                            </a> 
                                        </li>
                                    </ol>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}