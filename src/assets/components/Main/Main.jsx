import React from "react";
import Text from "../Text/Text.jsx";
import Forms from "../Forms/Forms";
import style from "./Main.module.css";
import SecForms from "../secForms/secForms.jsx";

const Main = () => {
  return (
    <main>
      <section className={style.fSec}>
        <div className={style.divText}>
          <Text
            style={style.t1}
            conteudo={"Ajude o algorítimo a ser mais certeiro"}
          />
          <Text
            style={style.p1}
            conteudo={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend."
            }
          />
          <Text
            style={style.p2}
            conteudo={
              "Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus."
            }
          />
        </div>
        <Forms />
      </section>
      <section className={style.sSec}>
          <div className={style.selection}>
            <span className={style.line} />
            <Text style={style.t2} conteudo={"Sua seleção especial!"} />
            <span className={style.line} />
          </div>
      </section>
      <SecForms />
      


    </main>
  );
};

export default Main;
