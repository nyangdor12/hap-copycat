import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
      <head>
        <title>Pet Supplies Canada | Shop Pet Products at Homesalive.ca</title>
      </head>
      {/* page main content */}
      <main className="page-main" id="maincontent">
        <div className="columns">
          <div className="column main">
            {/* my carousel banner */}
            <div className={styles.carouselwrapper}>
              <div className={styles.slides}>

                <div className="slide-1">
                  <a href="https://www.homesalive.ca/seasonal/summer-shop.html?nosto=66684e76573f4a6b11da80ec" target="_self">
                    <Image 
                      src="/images/summer.jpeg" 
                      width={767*1.73} 
                      height={300*1.73}
                      alt="summer" 
                    />
                  </a>
                </div>

                <div className="slide-2">
                  <a href="https://www.homesalive.ca/seasonal/summer-shop.html?nosto=66684e76573f4a6b11da80ec" target="_self">
                    <Image 
                      src="/images/sale_tikicat.jpeg" 
                      width={767*1.73} 
                      height={300*1.73}
                      alt="tikicat" 
                    />
                  </a>
                </div>

                <div className="slide-3">
                  <a href="https://www.homesalive.ca/seasonal/summer-shop.html?nosto=66684e76573f4a6b11da80ec" target="_self">
                    <Image 
                      src="/images/sale_acana.jpeg" 
                      width={767*1.73} 
                      height={300*1.73}
                      alt="acana" 
                    />
                  </a>
                </div>

              </div>
            </div>
           
        
            {/* non-carousel main page content */}
            <div className="home-inner">
              <section className="section recommended-brands">
                <div className={styles.brandsheader}>
                  <h3 className={styles.h3}>Shop By Brand</h3>
                  <h4 className={styles.h4}>Shop hundreds of your favourite pet brands - <a className={styles.a} title="view all brands" href="/brands.html" target="_self">Shop All Brands</a></h4>
                </div>
                <ul className={styles.brandslist}>
                  <li>
                    <a href="/brands/acana.html">
                      <img height="143" width="143" className="lazy loaded" data-src="https://www.homesalive.ca/media/wysiwyg/homepage/Acana-Logo.jpg" alt="Acana Logo" src="https://www.homesalive.ca/media/wysiwyg/homepage/Acana-Logo.jpg"/>
                    </a>
                  </li>
                  <li>
                    <a href="/brands/go.html">
                      <img height="143" width="143" className="lazy loaded" data-src="https://www.homesalive.ca/media/wysiwyg/homepage/go-logo.jpg" alt="Go! Logo" src="https://www.homesalive.ca/media/wysiwyg/homepage/go-logo.jpg"/>
                    </a>
                  </li>
                  <li>
                    <a href="/brands/blue-buffalo.html">
                      <img height="143" width="143" className="lazy loaded" data-src="https://www.homesalive.ca/media/wysiwyg/homepage/blue-buffalo-logo.jpg" alt="Blue Buffalo Logo" src="https://www.homesalive.ca/media/wysiwyg/homepage/blue-buffalo-logo.jpg"/>
                    </a>
                  </li>
                  <li>
                    <a href="/brands/stella-chewys.html">
                      <img height="143" width="143" className="lazy loaded" data-src="https://www.homesalive.ca/media/wysiwyg/homepage/stella-and-chewys-logo.jpg" alt="Stella &amp; Chewy's Logo" src="https://www.homesalive.ca/media/wysiwyg/homepage/stella-and-chewys-logo.jpg" />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
