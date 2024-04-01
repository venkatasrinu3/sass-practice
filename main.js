import './style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
// <div>
  // <a href="https://vitejs.dev" target="_blank">
    // <img src="${viteLogo}" class="logo" alt="Vite logo" />
    // </a>
  // <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    // <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    // </a>
  // <h1>Hello Vite!</h1>
  // <div class="card">
    // <button id="counter" type="button"></button>
    // </div>
  // <p class="read-the-docs">
    // Click on the Vite logo to learn more
    // </p>
  // </div>
// `

document.querySelector("#verticalAccordian").innerHTML = `
<div class="cards-wrapper">
  <div class="child-card card-1" style="background-image:url(/asian_paints_bgimages/interior-table-carpet.png)">
    <!-- <img src="/images/interior_ref.jpg" alt="living room" class="img-1"/> -->
    <div class="img-mask">
      <div class="txt-wrapper">
        <span class="heading">Interior paints</span>
        <div class="additional-txt">
          <span class="desc-txt">Asian Paints woodtech clear finishes protects the wood from atmostphere increasing the durability and beautifying the look of your furniture . </span>
          <button class="explr-btn">View Details
            <span class="material-symbols-outlined">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="child-card card-2" style="background-image:url(/images/exterior_ref_1.png)">
    <!-- <img src="/images/exterior_ref_1.png" alt="living room" class="img-2"/> -->
    <div class="img-mask">
      <div class="txt-wrapper">
        <span class="heading">Exterior paints</span>
        <div class="additional-txt">
          <span class="desc-txt">Don’t  let lack of color options for wooden substrate prevent you from your dream space, Explore Asian Paints colored finsihes range having 3500+ shades</span>
          <button class="explr-btn">View Details
            <span class="material-symbols-outlined">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="child-card card-3" style="background-image:url(/asian_paints_bgimages/kitchen-interior.png)">
    <!-- <img src="/images/texture_ref.png" alt="living room" class="img-3"/> -->
    <div class="img-mask">
      <div class="txt-wrapper">
        <span class="heading">Wall Textures</span>
        <div class="additional-txt">
          <span class="desc-txt">Creativity has no boundries , With Asian Paints Designer  finsihes, unleash your creative mind and design your wooden surface the way you want</span>
          <button class="explr-btn">View Details
            <span class="material-symbols-outlined">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="child-card card-4" style="background-image:url(/asian_paints_bgimages/square-table.png)">
    <!-- <img src="/images/wallpapers_ref.png" alt="living room" class="img-4"/> -->
    <div class="img-mask">
      <div class="txt-wrapper">
        <span class="heading">Wallpapers</span>
        <div class="additional-txt">
          <span class="desc-txt">Asian Paints wood stains helps you get tone of your favourite wood material </span>
          <button class="explr-btn">View Details
            <span class="material-symbols-outlined">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="child-card card-5" style="background-image:url(/asian_paints_bgimages/waterbases2.webp)">
    <!-- <img src="/images/waterproof_ref.jpg" alt="living room" class="img-5"/> -->
    <div class="img-mask">
      <div class="txt-wrapper">
        <span class="heading">Water proofing</span>
        <div class="additional-txt">
          <span class="desc-txt">Asian Paints woodtech clear finishes protects the wood from atmostphere increasing the durability and beautifying the look of your furniture . </span>
          <button class="explr-btn">View Details
            <span class="material-symbols-outlined">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="child-card card-6" style="background-image:url(/asian_paints_bgimages/interior-table-carpet.png)">
    <!-- <img src="/images/woodpaint_ref.png" alt="living room" class="img-6"/> -->
    <div class="img-mask">
      <div class="txt-wrapper">
        <span class="heading">Wood paints</span>
        <div class="additional-txt">
          <span class="desc-txt">Asian Paints woodtech clear finishes protects the wood from atmostphere increasing the durability and beautifying the look of your furniture . </span>
          <button class="explr-btn">View Details
            <span class="material-symbols-outlined">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="child-card card-7" style="background-image:url(/images/metalpaint_ref.png)">
    <!-- <img src="/images/metalpaint_ref.png" alt="living room" class="img-7"/> -->
    <div class="img-mask">
      <div class="txt-wrapper">
        <span class="heading">Metal paints</span>
        <div class="additional-txt">
          <span class="desc-txt">Asian Paints woodtech clear finishes protects the wood from atmostphere increasing the durability and beautifying the look of your furniture . </span>
          <button class="explr-btn">View Details
            <span class="material-symbols-outlined">
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`

setupCounter(document.querySelector('#counter'))