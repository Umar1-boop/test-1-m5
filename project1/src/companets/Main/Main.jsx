import './main.css';
import a1 from '../../img/A1.png'
import a2 from '../../img/A2.png'
import a3 from '../../img/A3.png'
import a4 from '../../img/A4.png'
import q from '../../img/pic.png'


export default function Main() {
  return (
    <div>
        <section class="brands-section">
            <div class="container">
            <div class="brands-grid">
                <div class="brand-card">
                <img src={a1} alt="" />
                </div>
                <div class="brand-card">
                 <img src={a2} alt="" />   
                </div>
                <div class="brand-card">
                 <img src={a3} alt="" />   
                </div>
                <div class="brand-card">
                   <img src={a4} alt="" /> 
                </div>
            </div>
            </div>
        </section>

        <section class="product-section">
            <div class="container product-container">
            <div class="product-info">
                <h1 class="product-title">Simple скетчбук</h1>
                <p class="product-description">
                80 листов, твердая обложка, бумага Fabriano 200 г/м². Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!
                </p>
                <button class="buy-btn">Купить</button>
            </div>
            <div class="product-image-wrapper">
                <img src={q} alt="" />
            </div>
            </div>
        </section>

        <footer class="footer">
            <div class="container footer-container">
            <div class="footer-logo">
                <span class="logo-icon">○</span> simple <span class="logo-toggle">⊂⊃</span>
            </div>
            <div class="social-links">
                <a href="#" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="social-icon"><i class="fa-brands fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fa-brands fa-youtube"></i></a>
            </div>
            </div>
        </footer>
    </div>
  )
}

// console.log('123');
// console.log('123');
