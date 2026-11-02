import './products.css';
import v1 from '../../img/V1.png'


export default function Products() {
  return (
    <div>
        
    <section className="catalog-section">
      <div className="catalog-grid">
        
        {/* Карточка 1: Упаковка */}
        <div className="catalog-card">
          <div className="catalog-img-wrapper">
            <img src="/images/upakovka.png" alt="Упаковка" className="catalog-img" />
          </div>
          <div className="catalog-content">
            <h3>Упаковка</h3>
            <span className="catalog-tirazh">Тираж: от 50 штук</span>
            <p className="catalog-text">
              Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы 
              и расцветки, изготовим форму под заказ.
            </p>
            <a href="#" className="catalog-link">Подробнее &rarr;</a>
          </div>
        </div>

        {/* Карточка 2: Пакеты */}
        <div className="catalog-card">
          <div className="catalog-img-wrapper">
            <img src="/images/pakety.png" alt="Пакеты" className="catalog-img" />
          </div>
          <div className="catalog-content">
            <h3>Пакеты</h3>
            <span className="catalog-tirazh">Тираж: от 200 штук</span>
            <p className="catalog-text">
              С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, 
              крафт-бумага. Различные расцветки и дизайн.
            </p>
            <a href="#" className="catalog-link">Подробнее &rarr;</a>
          </div>
        </div>

        {/* Карточка 3: Кейсы */}
        <div className="catalog-card">
          <div className="catalog-img-wrapper">
            <img src="/images/kejsy.png" alt="Кейсы" className="catalog-img" />
          </div>
          <div className="catalog-content">
            <h3>Кейсы</h3>
            <span className="catalog-tirazh">Тираж: от 30 штук</span>
            <p className="catalog-text">
              Подойдет для документов и других бумаг. Различные расцветки, размеры 
              и плотность. Материал: прессованная бумага.
            </p>
            <a href="#" className="catalog-link">Подробнее &rarr;</a>
          </div>
        </div>

        {/* Карточка 4: Другие изделия */}
        <div className="catalog-card">
          <div className="catalog-img-wrapper">
            <img src="/images/drugie-izdeliya.png" alt="Другие изделия" className="catalog-img" />
          </div>
          <div className="catalog-content">
            <h3>Другие изделия</h3>
            <span className="catalog-tirazh">Тираж: от 100 штук</span>
            <p className="catalog-text">
              Нестандартные упаковки, кейсы и другие изделия различных размеров 
              и конфигураций. Изготовим в кратчайшие сроки.
            </p>
            <a href="#" className="catalog-link">Подробнее &rarr;</a>
          </div>
        </div>

      </div>
    </section>


    </div>
  )
}
