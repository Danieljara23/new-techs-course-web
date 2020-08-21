import { css } from "@emotion/core";
import  Layout  from "../src/Layout/index";
import { device } from '../shared/mediaqueries';
import { Tabs } from 'antd';

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

const tabs = [
  { title: 'Educación Virtual' },
  { title: 'Características' },
  { title: 'Principios básicos' },
  { title: 'Conceptos importantes' },
  { title: 'Recomendaciones: (plataformas y herramientas)' },
  { title: 'Referencias Bibliográficas' }
];

const youtubeId = 'iE3LDcplEXo';

function Chapter1(){
  return(
    <Layout title="Capítulo 1">
      <div css={mainContentCss}>
        <h1>Capítulo 2: Educación Virtual</h1>
        <div css={videoContainerCss}>
          <div css={videoCss}>
            <iframe css={iframeCss}
              src={`https://www.youtube.com/embed/${youtubeId}`}
              frameBorder="0"
            />
          </div>
        </div>
        <div css={tabsContainerCss}>
          <Tabs defaultActiveKey="1" tabPosition="top">
            <TabPane tab="Educación Virtual" key="1">
              <p>Según el MEN, La educación virtual, también llamada "educación en línea", se refiere al desarrollo de programas de formación que tienen como escenario de enseñanza y aprendizaje el ciberespacio.</p>
              <p></p>
              <p>La modalidad virtual en este momento es el único medio práctico que se tiene en la educación  para llevar conocimiento  en medio de la pandemia o de otras circunstancias en el que se ve afectado los encuentros y aunque este no nos brinde un espacio de diálogo o experiencias,  propicia espacios de aprendizaje por medio de la web contando con unas estrategias principales y unas maneras de enseñar diferentes a la de la escuela tradicional aunque se puede ver afectado por el estado socioeconómico.</p>
              <p>Este tipo de aprendizaje se  vio necesario ya que para algunos niños no es posible la educación en escuelas o colegios de manera presencial, pero se vio más enfatizada y se dio a conocer en este año, ya que por la pandemia este era el único medio que se tenía para no suspender los procesos de aprendizaje, gracias a que el uso de tecnologías en niños, niñas y jóvenes es permitido y la mayoría de los hogares cuentan con ellos. </p>
            </TabPane>
            <TabPane tab="Características" key="2">
              <p>En el siguiente link se encuentra una pieza audiovisual en donde se describen algunas de las principales características de la educación virtual obtenidas de diferentes fuentes, las cuales indican de alguna manera los objetivos que se quieren lograr con esta modalidad y sus requerimientos.</p>
              <div css={videoContainerCss}>
                <div css={mediaContainerCss}>
                  <iframe css={iframeCss}
                    src="https://www.powtoon.com/embed/bqsFnbmlq1L/"
                    frameBorder="0"
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Principios básicos" key="3">
              <h3>IMAGEN</h3>
              <p>Elit consequat occaecat velit ullamco laborum non eiusmod. Ipsum anim aliqua id tempor sunt ad ut mollit Lorem est consectetur. Eu officia consequat aliqua eu incididunt Lorem aliquip laborum ut voluptate labore velit sit. Est veniam nulla ad do ipsum reprehenderit minim mollit do. Sint ea do labore sit irure quis. Eu exercitation magna enim ut voluptate enim occaecat adipisicing veniam. Occaecat adipisicing Lorem officia cillum et veniam occaecat aliquip amet ipsum ipsum id mollit fugiat.</p>
            </TabPane>
            <TabPane tab="Conceptos importantes" key="4">
              <p><strong>Tecnología:</strong> Es el punto de partida porque el e Learning se basa en este recurso, pero es solo un vehículo en el que se transporta la educación.  La tecnología debe ser usada con mesura, no puede usarse ni más ni menos de la necesaria y que satisfaga por un lado las necesidades del estudiante, de los profesores y del contenido.</p>
              <p><strong>Contenidos:</strong> Es el conocimiento almacenado en formatos de documentos, videos,  pdf  y muchas otras formas que se entregan al estudiante mediante la tecnología.</p>
              <p><strong>Evaluación:</strong> Al modelo se le agregó un nuevo componente, la evaluación, debido a que todos los participantes deben rendir cuenta de sus propios actos de cara a los objetivos del curso.  Dos modelos de evaluación del eLearning se ajustan bastante al entorno local, el modelo de Donald L. Kirkpatric y otro diseñado por William Horton; ambos abogan por lo mismo, un uso sencillo de la tecnología, rendición de cuentas de todos los actores y un diseño amigable.</p>
              <p><strong>Interacción:</strong> Paulo Freire dice que el que enseña, aprende al enseñar y el que aprende, enseña al aprender.  Nada es más cierto en ambientes virtuales donde el conocimiento está al alcance de todos y donde tanto profesores como alumnos aprenden juntos, la llave para lograrlo es la interacción. Los foros, chats, trabajos grupales, emails, asesorías, son solo una forma de interacción y está junto con las otras dos partes, es la que produce al final el conocimiento. </p>
              <p>Si bien en la enseñanza virtual no contamos con un tipo de aproximación, la interacción debe pensarse en otros términos. Para ello necesitamos hablar de dos conceptos fundamentales: </p>
              <ol>
                <li>Interacción <strong>sincrónica</strong>, que es cuando participas al mismo tiempo y recibes respuestas simultáneamente, como en un chat o videoconferencia. </li>
                <li>Interacción <strong>asincrónica</strong>, cuando la interacción no es paralela y puede demorar un tiempo entre respuesta y respuesta. Un buen ejemplo es cuando el profesor deja alguna pregunta a ser respondida a lo largo de la semana.</li>
              </ol>
              <blockquote>
              “En los últimos tiempos, a pesar de la dificultad para transformar los contextos (Sancho, 2006), la educación ha evolucionado principalmente desde el espacio/tiempo en el que se desarrolla hasta sus métodos de enseñanza; por consiguiente, se puede indicar que lo ideal es que en un mundo tan globalizado como el actual, no se pierda el verdadero propósito de la educación, que es formar a las personas para la vida”.
              </blockquote>
              
              
              
            </TabPane>
            <TabPane tab="Historia de la educación Virtual" key="5">
              <p>La educación siempre existió, pero la enseñanza virtual solo tuvo lugar con la llegada y popularización de Internet.</p>
              <p>El uso de máquinas en la enseñanza ya tiene bastante tiempo, por ejemplo, para aprender matemáticas se usó el ábaco y después, cuando las cuentas empezaron a complicarse, la calculadora.</p>
              <p>Una línea del tiempo de la relación entre e-learning y educación, y cómo la tecnología desembocó en la enseñanza virtual es un buen aspecto para aprender sobre el cómo se ha venido dando en el transcurso de los años. </p>
              <h4>IMAGEN</h4>
              <h3>Desafíos de la educación virtual en la primera infancia</h3>
              <p>Las tecnologías de información y telecomunicaciones que sostienen los sistemas de educación virtual permiten la transmisión de estímulos cognitivos, visuales y en algunos casos kinestésicos. Sin embargo, debemos de tener en cuenta una serie de recomendaciones con las cuales abriremos las posibilidades a un terreno muy amplio por explorar, dentro de estas podemos encontrar: </p>
              <ul>
                <li><strong>Necesidades específicas</strong>: Un niño en primera infancia espontáneamente busca satisfacer necesidades motrices, sociales, afectivas, cognitivas, a través del juego, movimiento libre, experiencias sensoriales, experimentación, indagación, arte, música. </li>
                <li><strong>Propósito de aprendizaje:</strong> Es preciso que el niño alcance las competencias, capacidades, estándares, y desempeños establecidos en el proceso de escolaridad, de la forma más oportuna (no temprana), respetuosa, segura y autónoma.</li>
                <li><strong>Rol de las figuras parentales</strong> como principales fuentes de protección, guía, información y referentes de conducta hace de los padres actores fundamentales, cuya presencia e intervención consciente es inversamente proporcional a la edad del niño.</li>
                <li><strong>Tutoría y orientación a las figuras parentales</strong> desde los profesionales en educación y psicopedagogía contribuyen a fortalecer y sostener el rol paterno en la primera infancia.</li>
                <li><strong>Vínculo afectivo positivo.</strong> Es muy beneficioso que el espacio escolar ofrezca seguridad y estabilidad emocional, como estructura subyacente a los procesos de aprendizaje. Cuando hay emoción, hay aprendizaje nos dice la neurociencia.</li>
                <li><strong>El tiempo es relativo</strong>. Los procesos de aprendizaje en primera infancia tienen un componente emocional que es base fundamental para generar <strong>aprendizaje significativo</strong>. Es totalmente posible, y necesario, generar experiencias con significado emocional que el niño asimilará con facilidad, rapidez y motivación. El tiempo-reloj sí es relevante en líneas de producción-consumo, o en acciones de repetición que generan especialización en ciertas actividades (entrenamiento, adiestramiento), mas no en la generación de espacios para el desarrollo socioafectivo.</li>
              </ul>

              <h3>¿Cuál es el papel de los padres de familia?</h3>
              <p>Considerando las condiciones actuales, la decisión de tomar servicios de Educación virtual para primera infancia implica tener en cuenta:</p>
              <ul>
                <li>Papá o mamá asume el papel de guía y orientador, con el soporte del profesional en educación que está al otro lado del computador.</li>
                <li>Contar con recursos materiales necesarios: al menos un teléfono inteligente, o mejor aún una laptop, con internet</li>
                <li>Dar la prioridad razonable al acompañamiento, lo que nos permitirá asignar un tiempo al día en generar los espacios de aprendizaje para el niño, con el soporte del profesional educativo asignado</li>
              </ul>
              <h3>IMAGEN</h3>
            </TabPane>
            <TabPane tab="Desafíos de la educación virtual en la primera infancia" key="6">
              <h4>FALTA IMAGEN</h4>
            </TabPane>
            <TabPane tab="¿Cuál es el papel de los padres de familia?" key="7">
              <h4>FALTA IMAGEN</h4>
            </TabPane>
            <TabPane tab="Recomendaciones: (plataformas y herramientas)" key="8">
              <h4>FALTA IMAGEN</h4>
            </TabPane>
            <TabPane tab="Referencias" key="9">
              <ul>
                <li>Kronos, Á. (Abril de 2020). Desafíos de la educación a distancia en la primera infancia. Obtenido de KRONOS 365: <a href="https://kronos365.com/desafios-de-la-educacion-a-distancia-en-la-primera-infancia/" target="_blank">https://kronos365.com/desafios-de-la-educacion-a-distancia-en-la-primera-infancia/</a></li>
                <li>Mineducación. (2020). Educación virtual o educación en línea. Obtenido de Ministerio de educación : <a href="https://www.mineducacion.gov.co/1759/w3-article-196492.html?_noredirect=1" target="_blank">https://www.mineducacion.gov.co/1759/w3-article-196492.html?_noredirect=1</a></li>
                <li>Mogollón, R. (Mayo de 2019). ¿Cómo sacarle provecho a la enseñanza virtual? Obtenido de Hotmart/BLOG: <a href="https://blog.hotmart.com/es/ensenanza-virtual/" target="_blank">https://blog.hotmart.com/es/ensenanza-virtual/</a></li>
              </ul>
            </TabPane>
          </Tabs>
          
            
        </div>
      </div>
    </Layout>
  )
}

export default Chapter1