import { css } from "@emotion/core";
import  Layout  from "../src/Layout/index";
import { device } from '../shared/mediaqueries';
import ResourcesCards from "../src/components/ResourcesCards"
import { Tabs, Table } from 'antd';
import { digitalPlatforms } from '../src/utils/technicsAndAlternatives';

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

  & div.ant-tabs-tab-active > div, & .ant-tabs-tab.ant-tabs-tab-active {
    color: #ec4941 !important;
  }

  & .ant-tabs-tab:hover {
    color: #ec4941 !important;
  }

  & .ant-tabs-ink-bar{
    background-color: #ec4941;
  }

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

const tableContainerCss = css`
  overflow: auto;

  & .ant-table-container{

  }
`;

const { TabPane } = Tabs;

const platformsColumns = [
  {
    title: 'Nombre',
    dataIndex: 'title',
    key: 'name',
    render: title => <a href={title.nameHref} target="_blank">{title.name}</a>,
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Observaciones',
    dataIndex: 'observation',
    key: 'observation',
    render: observation => <p>{observation.content}<a href={observation.observationHref} target="_blank">{observation.observationHref}</a></p>,
  },
];


function Chapter4(){
  return(
    <Layout title="Capítulo 4: La evaluación mediada por TIC">
      <div css={mainContentCss}>
        <h1>Capítulo 4: La evaluación mediada por TIC</h1>
        <p>¿Cómo evaluar el aprendizaje de los niños y niñas desde casa? ¿Cómo llevar a cabo la evaluación mediada por TIC? ¿A qué nos enfrenta la evaluación actualmente con los niños y niñas de primera infancia? A estas y muchas preguntas más, podrían verse enfrentados maestros y maestras en medio de la situación actual por la COVID.19 que ha llevado a dar continuidad a la educación desde casa. Por ello, a través de esta sesión proponemos algunas actividades y plataformas a los maestros y maestras de primera infancia para llevar a cabo la evaluación con niños y niñas, esperamos que pueda ser de mucha utilidad para todos.</p>
        <div css={videoContainerCss}>
          <div css={mediaContainerCss}>
            <iframe css={iframeCss}
              src="https://www.youtube.com/embed/yDo_gLTrpA4"
              frameBorder="0"
            />
          </div>
        </div>
        <div css={tabsContainerCss}>
          <Tabs defaultActiveKey="1" tabPosition="top">
            <TabPane tab="Recomendaciones" key="1">
              <h4>¿Y en tiempos de cuarentena como orientar la evaluación? </h4>
              <p>Aquí presentamos algunas recomendaciones para llevar a cabo la evaluación:</p>
              <ul>
                <li> Al pensar la evaluación, es importante tener en cuenta tanto lo académico como lo socioemocional de los niños y niñas, pues sabemos que este es un tiempo difícil, de múltiples cambios y retos, especialmente porque en el contexto escolar acontecían multiplicidad de asuntos – construcciones, interacciones y la relaciones entre pares, etc.- que en la actualidad se han suspendido o se difuminan por el aislamiento obligatorio. Por ello, invitamos a darle lugar al componente socioemocional y no solo la evaluación de los contenidos académicos.</li>
                <li>Cuando se tiene la posibilidad de tener encuentro sincrónico con los niños y niñas es fundamental escuchar sus voces, a través de un saludo o de las actividades de participación activa durante la clase. Partiendo de esto, se pueden llevar a cabo la evaluación a través de sus relatos, respuestas a preguntas y diversos juegos propuesto más adelante.</li>
                <li>Recomendamos ofrecer una respuesta a los niños y niñas sobre el trabajo evaluado, esto con el ánimo de que se sientan escuchados y reconocidos. Además es importante preguntar por los conocimientos y aprendizajes obtenidos y por la percepción de los encuentros realizados.</li>
                <li>Más allá de las propuestas aquí presentadas, recomendamos diversificar las formas de evaluar a los niños y niñas de primera infancia, a través de diferentes actividades prácticas desde casa, que no impliquen únicamente la realización de fichas, esto con el fin de evitar la monotonía en esta tarea y su vez valorar sus habilidades y creatividad.</li>
              </ul>
            </TabPane>
            <TabPane tab="Técnicas y alternativas" key="2">
              <p>A continuación queremos compartir algunas herramientas, ideas y actividades a través de múltiples formatos que permitan llevar a cabo la evaluación con estudiantes de primera infancia durante este tiempo de educación en casa. Este ha sido un rastreo con el cual queremos invitar a los maestros y maestras a transformar las formas de llevar a cabo la evaluación y continuar con la búsqueda de estos recursos educativos.</p>
              <div css={videoContainerCss}>
                <div css={mediaContainerCss}>
                  <iframe css={iframeCss}
                    src="https://view.genial.ly/5f3bcf50b502100d6414726e"
                    frameBorder="0"
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Plataformas" key="3">
              <h4>Plataformas digitales para diseñar actividades evaluativas</h4>
              <Table columns={platformsColumns} dataSource={digitalPlatforms} css={tableContainerCss}/>
            </TabPane>
            <TabPane tab="Referencias" key="4">
              <ul>
                <li>Rosas, Ceric, Aparicio, Arango, Arroyo, Benavente, Escobar, Olguín, Pizarro, Ramírez, Tenorio, Vélez (2015) ¿Pruebas tradicionales o evaluación invisible a través del juego? nuevas fronteras de la evaluación cognitiva. Recuperado de: <a href="https://www.redalyc.org/articulo.oa?id=96736972008" target="_blank">https://www.redalyc.org/articulo.oa?id=96736972008</a></li>
                
              </ul>
            </TabPane>
          </Tabs>
          
            
        </div>
      </div>
    </Layout>
  )
}

export default Chapter4