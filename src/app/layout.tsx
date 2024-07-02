"use client";

import type { Metadata } from "next";
import { GoSearch } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import "./globals.css";
import CartListProvider from "@/components/cartlist-hooks";
import CartSizeDisplay from "@/components/CartSizeDisplay";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          <CartListProvider>
            <header className="page-header">
              <div className="header content">
                <strong className="logo"> 
                  <Link href="/"><img src="https://www.homesalive.ca/static/version1718647787/frontend/Gorilla/homesalive/en_CA/images/logo.svg" title="Homes Alive Pets" alt="Homes Alive Pets" width="170" height="105"/></Link>
                </strong>
                <div className="block block-search">
                  <form className="form minisearch" action="/products" method="get">
                    <div className="field search">
                      <label className="label" htmlFor="search" data-role="minisearch-label"><span>Search</span></label>
                      <div className="control">
                        <input id="search" type="text" name="q" value="" placeholder="What are you looking for today?" className="input-text" role="combobox" aria-haspopup="false" aria-autocomplete="both" autoComplete="off" aria-expanded="false"/>
                      </div>
                      <div className="action">
                        <button type="submit" title="Search" className="action search" aria-label="Search"><GoSearch /></button>
                      </div>
                    </div>
                    
                  </form>
                </div>
                <div className="header-right">
                  <div className="header links">
                    <a href="https://www.homesalive.ca/customer/account/login/">SIGN IN</a>
                  </div>
                  <div className="minicart-wrapper">
                    <Link className="action showcart" href="/checkout" data-bind="scope: 'minicart_content'"><FaShoppingCart /></Link>
                  </div>
                  <CartSizeDisplay />
                </div>
              </div>
            </header>
            {/* nav bar */}
            <div className="section dl-menu-wrapper nav-sections">
              <nav className="navigation dl-menuwrapper desktopview" role="navigation"> 
                <ul className="ld-menu ui-menu" id="main-menu" role="menu">{/* flex */}
                  <li className="level0">
                    {/* the top level title */}
                    <Link href="/products" className="top-level ui-menu-item-wrapper" role="menuitem">
                      <span>DOG</span>
                    </Link>
                    {/* submenu to be implemented */}
                  </li>
                  <li className="level0">
                    {/* the top level title */}
                    <a href="https://homealive.ca/cat.html" className="top-level ui-menu-item-wrapper" role="menuitem">
                      <span>CAT</span>
                    </a>
                    {/* submenu to be implemented */}
                  </li>
                  <li className="level0">
                    {/* the top level title */}
                    <a href="https://homealive.ca/sale.html" className="top-level ui-menu-item-wrapper" role="menuitem">
                      <span>Sale</span>
                    </a>
                    {/* submenu to be implemented */}
                  </li>
                  <li className="level0">
                    {/* the top level title */}
                    <a href="#" className="top-level ui-menu-item-wrapper" role="menuitem">
                      <span>FEATURED</span>
                    </a>
                    {/* submenu to be implemented */}
                  </li>
                </ul> 
              </nav>
            </div>
            {children}
          </CartListProvider>
          {/* footer */}
          <footer className="page-footer">
            <div className="footer-top-liner">
              <div className="subscribe-title"><p>Sign up for coupons, special offers, and more</p></div>
              {/* TODO: block newsletter */}
              {/* TODO: csm-social */}
            </div>
            <div className="footer-content">
              <div className="footer-cms-links">
                <div className="cms-section cms-customer-care">
                  <h3 className="ac-header">Customer Care</h3>
                    <div className="ac-content links">
                      <ul>
                        <li><a href="https://www.homesalive.ca/contact-us">Contact Us</a></li>
                        <li><a href="https://www.homesalive.ca/returns-exchanges">Returns &amp; Exchanges</a></li>
                        <li><a href="https://www.homesalive.ca/shipping-information">Shipping Info</a></li>
                      </ul>
                    </div>
                </div>
                <div className="cms-section cms-about">
                  <h3 className="ac-header">About</h3>
                  <div className="ac-content">
                    <ul>
                      <li><a href="https://info.homesalive.ca/about-us">About Us</a></li>
                      <li><a href="https://blog.homesalive.ca">Blog</a></li>
                      <li><a href="https://www.homesalive.ca/jobs">Jobs</a></li>
                      <li><a href="https://www.homesalive.ca/locations">Locations</a></li>
                      <li><a href="https://www.homesalive.ca/disclosure-regarding-modern-slavery">Disclosures</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* chat */}
        <div className="embeddedServiceHelpButton">
          <div className="helpButton">
            <button className="uiButton helpButtonDisabled" aria-disabled="true">
              <span className="embeddedServiceIcon" aria-hidden="true" data-icon=""></span>
              <span className="helpButtonLabel" id="helpButtonSpan" aria-live="polite" aria-atomic="true">
                <span className="assistiveText">Live chat:</span>
                <span className="message">Agent Offline</span>
              </span>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
