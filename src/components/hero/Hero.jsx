import React from "react";
import "./Hero.scss";
import { mainPic } from "../../assets/images";

function Hero() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="first-items">
            <img src={mainPic} alt="Img" />
            <div className="texts">
              <p>LEANGROUP - тубы и этикетки</p>
              <p>Ламинатные тубы</p>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button>Каталог</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="second-items">
            <div className="texts">
              <p>О компании </p>
              <p>LEANGROUP</p>
            </div>
            <div className="img-text">
              <iframe
                src="https://www.youtube.com/embed/uXWycyeTeCs"
                // width={500}
                // height={500}
              ></iframe>

              <p>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб. Имея две технологии – для
                производства ламинатных и экструзионных туб, мы предлагаем вам
                широкий спектр возможностей. Большим преимуществом является
                собственный печатный цех в ламинате и in-line печать в экструзии
                с возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции. С января 2018
                года компания стала членом Европейской Ассоциации производителей
                туб (ETMA), что подтверждает сильную позицию бренда и на рынке
                Европы.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
