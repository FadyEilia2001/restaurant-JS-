import { hero } from "./hero";
import burger1 from "./imgs/burger1.png";

export const homeEl = document.createElement("div");

homeEl.appendChild(hero);

// homeEl.appendChild(main);

const newSection = document.createElement("div");

newSection.innerHTML = `

     <main>
          <div class="card-heading-container">
            <h2 class="popular-items-heading">Popular Items</h2>
          </div>
          <section class="card-container">
            <div class="card">
              <div class="card-body">
                <p class="card-title">Burger and Fries</p>
                <p class="card-review">⭐️⭐️⭐️⭐️⭐️</p>
                <p class="card-order">Order Now</p>
              </div>
              <div class="card-img-container">
                <image
                  class="card-img"
                  src=${burger1}
                  alt="Burger and fries combo"
                ></image>
              </div>
            </div>

              <div class="card">
              <div class="card-body">
                <p class="card-title">Liftoff Bacon</p>
                <p class="card-review">⭐️⭐️⭐️⭐️⭐️</p>
                <p class="card-order">Order Now</p>
              </div>
              <div class="card-img-container">
                <image
                  class="card-img"
                  src=${burger1}
                  alt="Burger and fries combo"
                ></image>
              </div>
            </div>

              <div class="card">
              <div class="card-body">
                <p class="card-title">Veggie and fries</p>
                <p class="card-review">⭐️⭐️⭐️⭐️⭐️</p>
                <p class="card-order">Order Now</p>
              </div>
              <div class="card-img-container">
                <image
                  class="card-img"
                  src=${burger1}
                  alt="Burger and fries combo"
                ></image>
              </div>
            </div>
          </section>
        </main>

`;

homeEl.appendChild(newSection);
