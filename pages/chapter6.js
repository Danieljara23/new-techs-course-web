import { css } from "@emotion/core";
import  Layout  from "../src/Layout/index";
import { device } from '../shared/mediaqueries';
import { Tabs } from 'antd';
import Head from "next/head";

const mainContentCss = css`
  @media ${device.mobileS}{
    padding: 0 2%;
  }
  @media ${device.tablet}{
    padding: 0 10%;
  }
  @media ${device.laptop}{
    padding: 0 20%;
  }
  @media ${device.laptopL}{
    padding: 0 30%;
  }
  & h1 {
    margin-top: 20px;
  }
`;

const videoContainerCss = css`
  width: 100%;
`;

const tabsContainerCss = css`
  margin-top: 20px;
  width: 100%;

  & div.ant-tabs-tab-active > div {
    color: #ec4941 !important;
  }

  & .ant-tabs-tab:hover {
    color: #ec4941 !important;
  }

  & .ant-tabs-ink-bar{
    background-color: #ec4941;
  }

`;

const videoCss = css`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
`;

const iframeCss = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const mediaContainerCss = css`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
`;

const { TabPane } = Tabs;

const youtubeId = 'iE3LDcplEXo';

function Chapter6(){
  return(
    <Layout title="Capítulo 6: Padres, acompañantes y cuidadores">
      <div css={mainContentCss}>
        <h1>Capítulo 6: Padres, acompañantes y cuidadores</h1>
        <div css={videoContainerCss}>
          <div css={mediaContainerCss}>
            <iframe css={iframeCss}
              src="https://www.powtoon.com/embed/gaIcy50qv75/"
              frameBorder="0"
            />
          </div>
        </div>
        <div css={tabsContainerCss}>
          <Tabs defaultActiveKey="1" tabPosition="top">
            <TabPane tab="Familia & Escuela: relación trascendental." key="1">
              <div css={videoContainerCss}>
                <div css={mediaContainerCss}>
                  <iframe css={iframeCss}
                    src="https://app.emaze.com/@AOWICCZWR/familia--escuela"
                    frameBorder="0"
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Saberes, intereses y dimensiones del desarrollo infantil" key="2">
              <div css={videoContainerCss}>
                <div css={mediaContainerCss}>
                  
                  <iframe css={iframeCss}
                    src="https://www.canva.com/design/DAEEU33LB8w/leDQjJireptmf6mmc69COw/view"
                    frameBorder="0"
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Necesidades y actores" key="3">
              <p>La primera responsabilidad recae sobre el núcleo familiar, los padres o en su defecto la familia cercana. En América Latina, hay un fenómeno grande y que a su vez es un problema de grandes dimensiones, el embarazo en adolescentes, que influye directamente sobre la calidad de vida que los niños nacidos en este segmento, puedan tener; por lo tanto, los programas se deben diseñar no solo apuntando a las familias compuestas bajo mutuo acuerdo si no también para aquellas familias disfuncionales en las cuales la ausencia de uno o dos de los progenitores deja vacíos y delega responsabilidades en terceros. La educación entonces comienza por crear una conciencia social con respecto al deseo natural de maternar a temprana edad ya sea consciente o inconscientemente, cuando se hace de forma consciente por lo general es para tener una aceptación social, un cambio de rol o escapar de la autoridad.</p>
              <p>Afortunadamente no todos los hogares son hogares en los cuales se suscitan este tipo de fenómenos contrarios a lo “ideal”, queda claro entonces que para que los niños se desarrollen en familias funcionales es necesario educar al adolescente y al adulto, así se garantiza que la intervención de la sociedad y el estado sea mínima, sin embargo situaciones que se escapan al control de todos ponen no solo a la primera infancia si no a la humanidad entera bajo unas condiciones en las cuales se ponen a prueba las capacidades para prevenir, evitar y corregir el mayor daño posible, en cuanto a lo que normalmente debería hacerse con respecto a la crianza de un niño.</p>
              <p>Es el caso del momento actual por el que la sociedad está atravesando, el confinamiento debido a un problema global de salud nos obliga a replantear muchas de las cosas que de otra forma se harían, concretamente y como educadores hay que poner la mira en la manera en la cual se nos reta con nuevas técnicas que permitan alcanzar los objetivos que la virtualidad y presencialidad ofrecen cada una por su lado. Es claro que ambas maneras de enseñanza tienen sus ventajas y sus desventajas, es deber no solo de las autoridades si no de la familia y el maestro de ofrecer herramienta, recursos, facilidades, y técnicas que permitan que la brecha entre una enseñanza presencial y una virtual sea mínima.</p>
              <p>Cada uno de los actores tiene una responsabilidad inherente y cuyo papel es tan importante que no se puede desligar ninguno de ellos de los demás, el estado debe proporcionar los medios tecnológicos y los docentes preparados para afrontar una educación no convencional, esto se hace desde la academia universitaria, la sociedad consiente de el papel que juega en esta coyuntura debe permitir sistemas amigables diseñados exclusivamente para la enseñanza virtual y que contengan mecanismos para que los docentes tengan un control más especifico sobre los mismos medios a la hora de trabajar con los alumnos, los alumnos deberían ser instruidos para que asimilen como lo hacen de forma presencial, el conocimiento a través de las plataformas virtuales, los padres de familia y adultos responsables son un elemento que también debe ser tenido en cuenta en el momento en el que se diseñen nuevas alternativas de interacción, es cierto que los mayores problemas se ven en los estratos mas bajos en donde la capacidad económica para adquirir tecnología es un obstáculo grande y que deben ser intervenidos por el estado quien es garante de los derechos fundamentales y más aun los de la infancia y adolescencia, siendo prioritario que ofrezca alternativas de conectividad y que permitan alcanzar el objetivo de educar a una población bajo condiciones y contenidos, de lo contrario es el propio estado el primero en violar los derechos de dicha población, por cierto la más vulnerable.</p>
              <p>Se ve pues cómo esta población vulnerable a sido afectada incluso tiempos atrás, antes de que llegara el mencionado virus (covid- 19), antes que llegara la pandemia a nuestros hogares dicha población se ha visto afectada por la guerra, aunque no es el tema a tratar, si es fundamental hablar de lo que los niños y niñas les a tocado vivir durante su corta estadía.</p>
            </TabPane>
            <TabPane tab="Disposiciones ministeriales y de la política de primera infancia" key="4">
              <blockquote> “La educación en emergencia también ayuda a remediar el dolor dejado por malas experiencias, desarrolla habilidades y ayuda a la resolución de conflictos y construcción de la paz. Desde el Ministerio buscamos contribuir a la construcción de una cultura de seguridad, resiliencia y adaptación enseñando sobre las amenazas, promoviendo los establecimientos educativos como centros para la reducción comunitaria del riesgo de desastres y empoderando a los niños, niñas y jóvenes como líderes en la prevención de desastres”.</blockquote>
              <p>Teniendo en cuenta las exigencias emanadas por el Ministerio de Educación, cabe preguntarse, ¿cómo asegurar que cada espacio (hogar,casa), brinden las herramientas o los espacios adecuados para transmitir una buena educación?, si bien se sabe que en nuestra sociedad hay un centenar de estudiantes que no cuentan con los recursos necesarios para recibir la educación virtual, (computador, celular, tablet, internet, o incluso luz), lo que el Ministerio de Educación busca es garantizar que los niños y niñas crezcan con bases resilientes, con capacidades y cualidades de desarrollo cognitivo, de la mano de un espacio adecuado con buena iluminación, con un ambiente agradable que cuenta con herramientas pedagógicas, como libros, videos, computadores, en compañía de un sujeto que cumpla el rol de cuidador, coordinador, docente, ¿qué es lo que está haciendo el ministerio hoy en día para brindar y asegurar las herramientas pedagógicas? o ¿Qué hacen para adecuar dichos espacios?, teniendo en cuenta que la población más vulnerable es la que se ve afectada, no solo a nivel económico, sino a nivel socioemocional.</p>
              <p>Partamos de la experiencia de un niño o una niña que cuenta con los recursos necesarios para recibir clases virtuales, su educación sigue una línea, cuenta con un procesos sincrónicos, donde docente y estudiante podrán compartir directamente inquietudes y soluciones. Además, cuenta con la posibilidad de recibir una explicación del tema si es necesaria en el momento de abordar dicho tema, el tiempo destinado para las clases será fructífero, en la medida que este siga una secuencia.</p>
              <p>Ahora tomemos la postura de un niño o una niña que no cuente con estos recursos virtuales, su educación se verá afectada y no tendrá un seguimiento lineal, su proceso en todo momento será asincrónico por medio de videos y /o cartillas, sus dudas, inquietudes serán expresadas por medio de un video o una nota de voz que quizas sera respondida o podría quedar en él veremos, dado que sus clases son asincrónicas, asimismo, las dudas que pueden ir surgiendo a medida de ir leyendo o resolviendo la cartilla no serán resueltas por parte de un (docente), y su tiempo se vería afectado, dado que, no hay un proceso de conexión sincrónica, y este a su vez decidirá cuándo empezará a realizar los trabajos propuestos en la cartilla y/o vídeo.</p>
              <p>Todo esto no se expresa en vano, es para pensar en qué afecta esto directamente a un niño o una niña que no cuente con los recursos necesarios para una educación virtual, no solo se afectará su proceso cognitivo, sino que también se está perdiendo de ese crecimiento como sujeto activo, donde su voz y voto cuente en todo momento, en el acto de participar donde este se puede expresar, compartir lo observado lo descubierto lo pensado, cualidades construidas a raíz de una educación guiada.</p>
              <p>Es por ello, que esta cartilla es una apuesta que desde la virtualidad, se propone seguir sosteniendo el vínculo con los niños y las niñas desde ese ser maestro, porque vale la pena en estos momentos de contingencia velar porque desde las ideas de maestros y maestras, los más pequeños tengan una continuidad en sus procesos educativos, de estimulación en la medida de las posibilidades de cada uno y cada una, respetando el derecho a la educación que tienen.</p>
              <p>Por último, se enfatiza en la apuesta porque el niño o niña sea un sujeto activo, que cuente con un proceso estimulante donde su desarrollo cognitivo se vea intencionado, y que no se vea concebido meramente como un objetivo ya trazado por el currículo; además, se plantea esta como una oportunidad en la que la resiliencia se haga presente desde unas bases que le permitan desenvolverse en cualquier campo o espacio del vínculo social, cultural y político (casa,escuela, barrio).</p>
              <p>Es por esto, que se le debe brindar a los chicos y chicas una educación digna, la cual va de la mano en doble vía, es decir, estudiante y docente construyen en conjunto otras maneras de relacionamiento a partir de la contingencia generada por la actual pandemia, en el que la enseñanza y el aprendizaje se sustente desde la generosidad y el interés en el acto de educar, que implica otras acciones como observar, preguntar, resolver problemáticas de la vida cotidiana, construir otros horizontes que indiscutiblemente serán la base para ese derecho a seguir aprendiendo.</p>
            </TabPane>
            <TabPane tab="Referencias" key="5">
              <ul>
                <li>MEN (2010) El desarrollo infantil y las competencias en la primera infancia.<a href="http://www.mineducacion.gov.co/primerainfancia/1739/article-178053.html" target="_blank">http://www.mineducacion.gov.co/primerainfancia/1739/article-178053.html</a></li>
                <li>MEN Micrositios preescolar, básica, media. Gestión del riesgo. Ministerio de educación nacional. <a href="https://www.mineducacion.gov.co/1759/w3-propertyvalue-57052.html?_noredirect=1" target="_blank">https://www.mineducacion.gov.co/1759/w3-propertyvalue-57052.html?_noredirect=1</a></li>
                <li>Primera Infancia. (2014). Departamento Nacional de Planeación.<a href="https://www.dnp.gov.co/programas/desarrollo-social/pol%C3%ADticas-sociales-transversales/Paginas/primera-infancia.aspx" target="_blank">https://www.dnp.gov.co/programas/desarrollo-social/pol%C3%ADticas-sociales-transversales/Paginas/primera-infancia.aspx</a></li>
                <li>Unicef, Unicef, & Britto, P. R. (2017). La Primera Infancia importa para cada niño. Fondo de las Naciones Unidas para la Infancia, (UNICEF).</li>
              </ul>
            </TabPane>
          </Tabs>
          
            
        </div>
      </div>
    </Layout>
  )
}

export default Chapter6