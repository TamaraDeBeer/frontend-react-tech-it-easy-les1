import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import itemsSold from "./Helpers/itemsSold.js";
import itemsStock from "./Helpers/itemsStock.js";
import itemsToBeSold from "./Helpers/itemsToBeSold.js";
import tvName from "./Helpers/tvName.js";
import tvPrice from "./Helpers/tvPrice.js";
import tvScreenSize from "./Helpers/tvScreenSize.js";
import check from './assets/check.png';
import minus from './assets/minus.png';

function App() {

    function sortBestSelling() {
        inventory.sort((a, b) => {
            return a.sold - b.sold
        })
        console.log(inventory);
    }

    function sortCheapest() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        })
        console.log(inventory);
    }

    function sortSport() {
        inventory.sort((a, b) => {
            return a.refreshRate - b.refreshRate;
        })
        console.log(inventory);
    }

    function sortLargest() {
        inventory.sort((a, b) => {
            return a.availableSizes - b.availableSizes;
        })
        console.log(inventory);
    }



    return <>
        <main className="main-container">
            <h1>Tech it easy dashboard</h1>
            <section>
                <h2>Verkoopoverzicht</h2>
                <div className="dashboard-container">
                    <article className="dashboard-items sold-container">
                        <h3>Aantal verkochte producten</h3>
                        <p className="green">{itemsSold(inventory)}</p>
                    </article>
                    <article className="dashboard-items purchased-container">
                        <h3>Aantal ingekochte producten</h3>
                        <p className="blue">{itemsStock(inventory)}</p>
                    </article>
                    <article className="dashboard-items to-sell-container">
                        <h3>Aantal te verkopen producten</h3>
                        <p className="red">{itemsToBeSold(inventory)}</p>
                    </article>
                </div>
            </section>

            <section>
                <h2>Best verkochte tv</h2>
                <article className="best-selling-container">
                  <span>
                    <img src={bestSellingTv.sourceImg} alt="Afbeelding van het product"/>
                  </span>
                    <div className="best-selling-product-information">
                        <h3 className="tv-name">{tvName(bestSellingTv)}</h3>
                        <p className="tv-price">{tvPrice(bestSellingTv.price)}</p>
                        <p>{tvScreenSize(bestSellingTv.availableSizes)}</p>
                        <ul className="tv-assets">
                            <li><img src={check} alt="Icoon: check" className="icon"/>wifi</li>
                            <li><img src={minus} alt="Icoon: minus" className="icon"/>speech</li>
                            <li><img src={check} alt="Icoon: check" className="icon"/>hdr</li>
                            <li><img src={check} alt="Icoon: check" className="icon"/>bluetooth</li>
                            <li><img src={minus} alt="Icoon: minus" className="icon"/>ambilight</li>
                        </ul>
                    </div>
                </article>
            </section>

            <section className="brands-container">
                <h2>Beschikbare merken</h2>
                <ul className="product-brands">
                    {inventory.map((tv) => {
                        // eslint-disable-next-line react/jsx-key
                        return <li key={tv.type}>{tv.brand}</li>
                        // hoe zorg je dat dubbele merken niet voorkomen?
                    })}
                </ul>
            </section>

            <section>
                <h2>Alle tvs</h2>
                <button type="button" onClick={sortBestSelling}>Meest verkocht eerst</button>
                <button type="button" onClick={sortCheapest}>Goedkoopste eerst</button>
                <button type="button" onClick={sortSport}>Meest geschikt voor sport eerst</button>
                <button type="button" onClick={sortLargest}>Grootste schermgroottes eerst</button>

                {inventory.map((tv) => {
                    return (
                        <article className="products-container" key={tv.type}>
                            <span className="product-image">
                                <img src={tv.sourceImg} alt="Afbeelding van het product"/>
                            </span>
                            <div className="product-information">
                            <h3>{tvName(tv)}</h3>
                            <p className="all-tv-price">{tvPrice(tv.price)}</p>
                            <p>{tvScreenSize(tv.availableSizes)}</p>
                            <ul className="tv-assets">
                                {tv.options.map((option) => {
                                    if (option.applicable === true) {
                                        return <li key={option.name}><img src={check} alt="Icoon: check" className="icon"/>{option.name}</li>
                                    } else {
                                        return <li key={option.name}><img src={minus} alt="Icoon: minus" className="icon"/>{option.name}</li>
                                    }
                                })}
                            </ul>
                            </div>
                        </article>
                    )})}
            </section>
        </main>
    </>
}

export default App
