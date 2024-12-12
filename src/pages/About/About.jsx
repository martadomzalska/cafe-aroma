// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <div className="about">
//       {/* Header Section */}
//       <section className="header">
//         <h1>Unsere Geschichte, unsere Leidenschaft</h1>
//         <p>
//           Das Cafe Aroma ist mehr als nur eine Kaffeebar – es ist ein
//           Herzensprojekt, das mit viel Liebe und einer klaren Vision ins Leben
//           gerufen wurde.
//         </p>
//       </section>

//       {/* Story Section */}
//       <section className="story">
//         <h2>Die Entstehung</h2>
//         <p>
//           Vor zehn Jahren hatten Anna und Mark, ein Ehepaar mit einer großen
//           Leidenschaft für guten Kaffee und entspannte Momente, einen Traum. Sie
//           wollten einen Ort schaffen, an dem Menschen den Alltag hinter sich
//           lassen und neue Energie tanken können – ob allein mit einer Tasse
//           Kaffee oder in Gesellschaft.
//         </p>
//         <p>
//           Mit viel Engagement, ihrer Liebe zu Details und Unterstützung ihrer
//           Familie wurde dieser Traum wahr: Das Cafe Aroma öffnete seine Türen.
//           Seitdem ist es zu einem beliebten Treffpunkt in der Nachbarschaft
//           geworden – ein zweites Wohnzimmer für viele unserer Gäste.
//         </p>
//       </section>

//       {/* Philosophy Section */}
//       <section className="philosophy">
//         <h2>Unsere Philosophie</h2>
//         <p>
//           Für Anna und Mark war von Anfang an klar: Qualität und Wärme stehen im
//           Mittelpunkt. Alle unsere Kaffeespezialitäten werden aus nachhaltig
//           angebauten Bohnen zubereitet, die wir von kleinen Röstereien beziehen.
//           Die Kuchen und Desserts? Hausgemacht, mit Rezepten, die in der Familie
//           seit Generationen weitergegeben werden.
//         </p>
//         <p>
//           Doch was unser Cafe wirklich besonders macht, sind die Menschen: Unser
//           Team ist wie eine Familie, und wir freuen uns, diese familiäre
//           Atmosphäre an unsere Gäste weiterzugeben. Bei uns bist du keine Nummer
//           – bei uns bist du Teil einer Gemeinschaft.
//         </p>
//       </section>

//       {/* Family Business Section */}
//       <section className="family">
//         <h2>Ein Familienbetrieb mit Herz</h2>
//         <p>
//           Heute wird das Cafe Aroma immer noch von Anna und Mark geführt, die
//           mittlerweile auch ihre Kinder in den Betrieb einbringen. Ob es der
//           kreative Latte-Art-Wettbewerb von Tochter Lina ist oder die neuen
//           Kaffeerezepte, die Sohn Max aus seinen Reisen mitbringt – unser Cafe
//           bleibt lebendig und immer in Bewegung.
//         </p>
//         <p>
//           Wir sind stolz darauf, seit über einem Jahrzehnt ein fester
//           Bestandteil unserer Nachbarschaft zu sein. Viele unserer Gäste kennen
//           wir seit Jahren, und wir lieben es, ihre Geschichten zu hören. Unsere
//           größte Freude ist es, dass das Cafe Aroma für so viele Menschen zu
//           einem Ort voller schöner Erinnerungen geworden ist.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default About;
// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <div className="about">
//       <section className="header">
//         <h1>Unsere Geschichte, unsere Leidenschaft</h1>
//         <p>
//           Das Cafe Aroma ist mehr als nur eine Kaffeebar – es ist ein
//           Herzensprojekt, das mit viel Liebe und einer klaren Vision ins Leben
//           gerufen wurde.
//         </p>
//       </section>

//       <section className="story">
//         <div className="story-content">
//           <div className="story-text">
//             <h2>Die Entstehung</h2>
//             <p>
//               Vor zehn Jahren hatten Anna und Mark, ein Ehepaar mit einer großen
//               Leidenschaft für guten Kaffee und entspannte Momente, einen Traum.
//               Sie wollten einen Ort schaffen, an dem Menschen den Alltag hinter
//               sich lassen und neue Energie tanken können.
//             </p>
//             <p>
//               Mit viel Engagement, ihrer Liebe zu Details und Unterstützung
//               ihrer Familie wurde dieser Traum wahr: Das Cafe Aroma öffnete
//               seine Türen.
//             </p>
//           </div>
//           <img
//             src="/assets/images/about/family.jpg"
//             alt="Die Entstehung"
//             className="story-image"
//           />
//         </div>
//       </section>

//       <section className="philosophy">
//         <div className="philosophy-content">
//           <img
//             src="/assets/images/about/philosophie.jpg"
//             alt="Unsere Philosophie"
//             className="philosophy-image"
//           />
//           <div className="philosophy-text">
//             <h2>Unsere Philosophie</h2>
//             <p>
//               Für Anna und Mark war von Anfang an klar: Qualität und Wärme
//               stehen im Mittelpunkt. Alle unsere Kaffeespezialitäten werden aus
//               nachhaltig angebauten Bohnen zubereitet.
//             </p>
//             <p>
//               Doch was unser Cafe wirklich besonders macht, sind die Menschen:
//               Unser Team ist wie eine Familie, und wir freuen uns, diese
//               familiäre Atmosphäre an unsere Gäste weiterzugeben.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;
import React from "react";
import css from "./About.module.css";

const About = () => {
  return (
    <div className={css.about}>
      <section className={css.header}>
        <h1>Unsere Geschichte, unsere Leidenschaft</h1>
        <p>
          Das Cafe Aroma ist mehr als nur eine Kaffeebar – es ist ein
          Herzensprojekt, das mit viel Liebe und einer klaren Vision ins Leben
          gerufen wurde.
        </p>
      </section>

      <section className={css.story}>
        <div className={css.storyContent}>
          <div className={css.storyText}>
            <h2>Die Entstehung</h2>
            <p>
              Vor zehn Jahren hatten Anna und Mark, ein Ehepaar mit einer großen
              Leidenschaft für guten Kaffee und entspannte Momente, einen Traum.
              Sie wollten einen Ort schaffen, an dem Menschen den Alltag hinter
              sich lassen und neue Energie tanken können.
            </p>
            <p>
              Mit viel Engagement, ihrer Liebe zu Details und Unterstützung
              ihrer Familie wurde dieser Traum wahr: Das Cafe Aroma öffnete
              seine Türen.
            </p>
          </div>
          <img
            src="/assets/images/about/family.jpg"
            alt="Die Entstehung"
            className={css.storyImage}
          />
        </div>
      </section>

      <section className={css.philosophy}>
        <div className={css.philosophyContent}>
          <img
            src="/assets/images/about/philosophie.jpg"
            alt="Unsere Philosophie"
            className={css.philosophyImage}
          />
          <div className={css.philosophyText}>
            <h2>Unsere Philosophie</h2>
            <p>
              Für Anna und Mark war von Anfang an klar: Qualität und Wärme
              stehen im Mittelpunkt. Alle unsere Kaffeespezialitäten werden aus
              nachhaltig angebauten Bohnen zubereitet.
            </p>
            <p>
              Doch was unser Cafe wirklich besonders macht, sind die Menschen:
              Unser Team ist wie eine Familie, und wir freuen uns, diese
              familiäre Atmosphäre an unsere Gäste weiterzugeben.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
