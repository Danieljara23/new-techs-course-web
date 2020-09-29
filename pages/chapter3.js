import { css } from "@emotion/core";
import  Layout  from "../src/Layout/index";
import { device } from '../shared/mediaqueries';
import ResourcesCards from "../src/components/ResourcesCards"
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


function Chapter1(){
  return(
    <Layout title="Capítulo 3: Aplicaciones tecnológicas y recursos educativos digitales">
      <div css={mainContentCss}>
        <h1>Capítulo 3: Aplicaciones tecnológicas y recursos educativos digitales</h1>
        <div css={videoContainerCss}>
          <div css={mediaContainerCss}>
            <iframe css={iframeCss}
              src="https://www.powtoon.com/embed/dGFPnkX06Fj/"
              frameBorder="0"
            />
          </div>
        </div>
        <div css={tabsContainerCss}>
          <Tabs defaultActiveKey="1" tabPosition="top">
            <TabPane tab="Conceptualización de los RED" key="1">
              <div css={videoContainerCss}>
                <div css={mediaContainerCss}>
                <iframe css={iframeCss}
                  src="https://view.genial.ly/5f2cb819fa6ef00d76820df5"
                  frameBorder="0"
                />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Invitación a explorar banco de recursos" key="2">
              <div css={videoContainerCss}>
                <div css={mediaContainerCss}>
                <iframe css={iframeCss}
                  src="https://view.genial.ly/5f2f8cf10c238a0d9c2273cf"
                  frameBorder="0"
                />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Banco de recursos" key="3">
              <ResourcesCards/>
            </TabPane>
            <TabPane tab="Referencias" key="4">
              <ul>
                <li>Diccionario de la Real Academia Española (s.f). Analógico. Recuperado de <a href="https://dle.rae.es/analógico" target="_blank">https://dle.rae.es/analógico</a></li>
                <li>Diccionario de la Real Academia Española (s.f). Digital. Recuperado de <a href="http://cefire.edu.gva.es/pluginfile.php/1040541/mod_resource/content/2/52_caractersticas_de_los_recursos_digitales_educativos.html" target="_blank">http://cefire.edu.gva.es/pluginfile.php/1040541/mod_resource/content/2/52_caractersticas_de_los_recursos_digitales_educativos.html</a></li>
                <li>Universidad de Antioquia (2012). Recursos educativos digitales: conceptos básicos. Recuperado de <a href="http://aprendeenlinea.udea.edu.co/boa/contenidos.php/d211b52ee1441a30b59ae008e2d31386/845/estilo/aHR0cDovL2FwcmVuZGVlbmxpbmVhLnVkZWEuZWR1LmNvL2VzdGlsb3MvYXp1bF9jb3Jwb3JhdGl2by5jc3M=/1/contenido/" target="_blank">http://aprendeenlinea.udea.edu.co/boa/contenidos.php/d211b52ee1441a30b59ae008e2d31386/845/estilo/aHR0cDovL2FwcmVuZGVlbmxpbmVhLnVkZWEuZWR1LmNvL2VzdGlsb3MvYXp1bF9jb3Jwb3JhdGl2by5jc3M=/1/contenido/</a></li>
                <li>Universidad de Medellín (s.f). Recursos Educativos Digitales RED.</li>
                <li>Urzola Nuñez, P. F[Nombre de Usuario]. (2014, 09, 14). Recursos Educativos Digitales [Archivo de video]. Recuperado de <a href="https://www.youtube.com/watch?v=SEzllxpxgUs" target="_blank">https://www.youtube.com/watch?v=SEzllxpxgUs</a></li>
                
              </ul>
            </TabPane>
          </Tabs>
          
            
        </div>
      </div>
    </Layout>
  )
}

export default Chapter1