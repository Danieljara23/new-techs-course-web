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
  @media ${device.tablet}{
    padding: 0 20%;
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

const { TabPane } = Tabs;

const youtubeId = 'ffwlf3trQus';

function Chapter1(){
  return(
    <Layout title="Capítulo 1">
      <div css={mainContentCss}>
        <h1>Capítulo 1</h1>
        <p>Veniam consequat labore Lorem anim dolore enim sunt veniam sit excepteur labore minim laborum ipsum. Elit dolore occaecat et adipisicing sit minim elit. Consectetur magna culpa dolore do.</p>
        <div css={videoContainerCss}>
          <div css={videoCss}>
            <iframe css={iframeCss}
              src={`https://www.youtube.com/embed/${youtubeId}`}
              frameBorder="0"
            />
          </div>
          {/* <ReactPlayer url='https://www.youtube.com/watch?v=ffwlf3trQus&feature=emb_title' width="100%" height="auto" /> */}
        </div>
        <div css={tabsContainerCss}>
          <Tabs defaultActiveKey="1" >
            <TabPane tab="Título 1" key="1">
              <p>Elit consequat occaecat velit ullamco laborum non eiusmod. Ipsum anim aliqua id tempor sunt ad ut mollit Lorem est consectetur. Eu officia consequat aliqua eu incididunt Lorem aliquip laborum ut voluptate labore velit sit. Est veniam nulla ad do ipsum reprehenderit minim mollit do. Sint ea do labore sit irure quis. Eu exercitation magna enim ut voluptate enim occaecat adipisicing veniam. Occaecat adipisicing Lorem officia cillum et veniam occaecat aliquip amet ipsum ipsum id mollit fugiat.</p>
            </TabPane>
            <TabPane tab="Título 2" key="2">
              <p>Elit consequat occaecat velit ullamco laborum non eiusmod. Ipsum anim aliqua id tempor sunt ad ut mollit Lorem est consectetur. Eu officia consequat aliqua eu incididunt Lorem aliquip laborum ut voluptate labore velit sit. Est veniam nulla ad do ipsum reprehenderit minim mollit do. Sint ea do labore sit irure quis. Eu exercitation magna enim ut voluptate enim occaecat adipisicing veniam. Occaecat adipisicing Lorem officia cillum et veniam occaecat aliquip amet ipsum ipsum id mollit fugiat.</p>
            </TabPane>
            <TabPane tab="Título 3" key="3">
              <p>Elit consequat occaecat velit ullamco laborum non eiusmod. Ipsum anim aliqua id tempor sunt ad ut mollit Lorem est consectetur. Eu officia consequat aliqua eu incididunt Lorem aliquip laborum ut voluptate labore velit sit. Est veniam nulla ad do ipsum reprehenderit minim mollit do. Sint ea do labore sit irure quis. Eu exercitation magna enim ut voluptate enim occaecat adipisicing veniam. Occaecat adipisicing Lorem officia cillum et veniam occaecat aliquip amet ipsum ipsum id mollit fugiat.</p>
            </TabPane>
            <TabPane tab="Título 4" key="4">
              <p>Elit consequat occaecat velit ullamco laborum non eiusmod. Ipsum anim aliqua id tempor sunt ad ut mollit Lorem est consectetur. Eu officia consequat aliqua eu incididunt Lorem aliquip laborum ut voluptate labore velit sit. Est veniam nulla ad do ipsum reprehenderit minim mollit do. Sint ea do labore sit irure quis. Eu exercitation magna enim ut voluptate enim occaecat adipisicing veniam. Occaecat adipisicing Lorem officia cillum et veniam occaecat aliquip amet ipsum ipsum id mollit fugiat.</p>
            </TabPane>
            <TabPane tab="Título 5" key="5">
              <p>Elit consequat occaecat velit ullamco laborum non eiusmod. Ipsum anim aliqua id tempor sunt ad ut mollit Lorem est consectetur. Eu officia consequat aliqua eu incididunt Lorem aliquip laborum ut voluptate labore velit sit. Est veniam nulla ad do ipsum reprehenderit minim mollit do. Sint ea do labore sit irure quis. Eu exercitation magna enim ut voluptate enim occaecat adipisicing veniam. Occaecat adipisicing Lorem officia cillum et veniam occaecat aliquip amet ipsum ipsum id mollit fugiat.</p>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}

export default Chapter1