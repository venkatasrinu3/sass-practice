import './style.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

document.querySelector("#verticalAccordian").innerHTML = `
  <div class="cards-wrapper">
    <div class="child-card-1">
      <img src="/images/interior_ref.jpg" alt="living room" class="img-1"/>
      <span>
        <h2 >Interior paints</h2>
      </span>
    </div>
    <div class="child-card-2">
      <img src="/images/exterior_ref_1.png" alt="living room" class="img-2"/>
      <span>
        <h2 >Exterior paints</h2>
      </span>
    </div>
    <div class="child-card-3">
      <img src="/images/texture_ref.png" alt="living room" class="img-3"/>
      <span>
        <h2 >Wall Textures</h2>
      </span>
    </div>
    <div class="child-card-4">
      <img src="/images/wallpapers_ref.png" alt="living room" class="img-4"/>
      <span>
        <h2 >Wallpapers</h2>
      </span>
    </div>
    <div class="child-card-5">
      <img src="/images/waterproof_ref.jpg" alt="living room" class="img-5"/>
      <span>
        <h2>Water proofing</h2>
      </span>
    </div>
    <div class="child-card-6">
      <img src="/images/woodpaint_ref.png" alt="living room" class="img-6"/>
      <span>
        <h2>Wood paints</h2>
      </span>
    </div>
    <div class="child-card-7">
      <img src="/images/metalpaint_ref.png" alt="living room" class="img-7"/>
      <span>
        <h2>Metal paints</h2>
      </span>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
