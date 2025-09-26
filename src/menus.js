import burger2 from "./imgs/burger1.png";

export const menuPage = document.createElement("div");

const menuHeader = document.createElement("section");

// Menu header HTML
menuHeader.innerHTML = `
   <section>
          <div class="menu-header">
            <h1 class="menu-title">Our Menu</h1>
            <p class="menu-desc">Fresh, fast, and made to order</p>
            <div class="menu-filters">
              <span class="choose">All</span>
              <span>Burgers</span>
              <span>Chicken</span>
              <span>Fries & Sides</span>
              <span>Shakes</span>
              <span>Drinks</span>
            </div>
          </div>
        </section>
          <section class="menu-body">
          <div class="menu-card">
            <div class="card-left">
              <image
                class="card-img"
                src=${burger2}
                alt="burger image"
              ></image>
              <p class="card-price">$9.99</p>
            </div>

            <div class="card-right">
              <h3 class="menu-card-title">Blast-Off Classic</h3>
              <span class="card-tag">Best Seller</span>
              <p class="card-item-desc">
                Two smash patties, American Cheese, house sauce and pickles
              </p>
            </div>
            <div class="card-btn">
              <button type="button">Add to order</button>
            </div>
          </div>

          <div class="menu-card">
            <div class="card-left">
              <image
                class="card-img"
                  src=${burger2}
                alt="burger image"
              ></image>
              <p class="card-price">$9.99</p>
            </div>

            <div class="card-right">
              <h3 class="menu-card-title">Blast-Off Classic</h3>
              <span class="card-tag">Best Seller</span>
              <p class="card-item-desc">
                Two smash patties, American Cheese, house sauce and pickles
              </p>
            </div>
            <div class="card-btn">
              <button type="button">Add to order</button>
            </div>
          </div>

          <div class="menu-card">
            <div class="card-left">
              <image
                class="card-img"
                  src=${burger2}
                alt="burger image"
              ></image>
              <p class="card-price">$9.99</p>
            </div>

            <div class="card-right">
              <h3 class="menu-card-title">Blast-Off Classic</h3>
              <span class="card-tag">Best Seller</span>
              <p class="card-item-desc">
                Two smash patties, American Cheese, house sauce and pickles
              </p>
            </div>
            <div class="card-btn">
              <button type="button">Add to order</button>
            </div>
          </div>

          <div class="menu-card">
            <div class="card-left">
              <image
                class="card-img"
                 src=${burger2}
                alt="burger image"
              ></image>
              <p class="card-price">$9.99</p>
            </div>

            <div class="card-right">
              <h3 class="menu-card-title">Blast-Off Classic</h3>
              <span class="card-tag">Best Seller</span>
              <p class="card-item-desc">
                Two smash patties, American Cheese, house sauce and pickles
              </p>
            </div>
            <div class="card-btn">
              <button type="button">Add to order</button>
            </div>
          </div>

          <div class="menu-card">
            <div class="card-left">
              <image
                class="card-img"
                  src=${burger2}
                alt="burger image"
              ></image>
              <p class="card-price">$9.99</p>
            </div>

            <div class="card-right">
              <h3 class="menu-card-title">Blast-Off Classic</h3>
              <span class="card-tag">Best Seller</span>
              <p class="card-item-desc">
                Two smash patties, American Cheese, house sauce and pickles
              </p>
            </div>
            <div class="card-btn">
              <button type="button">Add to order</button>
            </div>
          </div>

          <div class="menu-card">
            <div class="card-left">
              <image
                class="card-img"
                  src=${burger2}
                alt="burger image"
              ></image>
              <p class="card-price">$9.99</p>
            </div>

            <div class="card-right">
              <h3 class="menu-card-title">Blast-Off Classic</h3>
              <span class="card-tag">Best Seller</span>
              <p class="card-item-desc">
                Two smash patties, American Cheese, house sauce and pickles
              </p>
            </div>
            <div class="card-btn">
              <button type="button">Add to order</button>
            </div>
          </div>

          <div class="menu-footer">
            <h3>Free delivery on orders over $25 today.</h3>
          </div>
        </section>
`;

menuPage.appendChild(menuHeader);

// Card HTML
