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
        console.log("Meest verkocht eerst");
    }

    function sortCheapest() {
        console.log("Goedkoopste eerst");
    }

    function sortSport() {
        console.log("Meest geschikt voor sport eerst");
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
                  <span className="product-image">
                    <img src={bestSellingTv.sourceImg} alt="Afbeelding van het product"/>
                  </span>
                    <div className="product-information">
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
            <section>
                <h2>Alle tvs</h2>
                <button type="button" onClick={sortBestSelling}>Meest verkocht eerst</button>
                <button type="button" onClick={sortCheapest}>Goedkoopste eerst</button>
                <button type="button" onClick={sortSport}>Meest geschikt voor sport eerst</button>
            </section>

        </main>
    </>
}

export default App
