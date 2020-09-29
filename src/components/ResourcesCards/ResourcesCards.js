import { css } from "@emotion/core";
import { tableData } from "./data";
import { device } from '../../../shared/mediaqueries';

const cardsContainerCss = css`
  display: grid;
  grid-gap: 20px;
  padding: 0 10px;
  

  @media ${device.mobileS}{
    grid-template-columns: 100%;
    margin: 0 2%;
  }
  @media ${device.laptop}{
    width: calc(100% - 20px);
    grid-template-rows: unset;
    grid-template-columns: 50% 50%;
    margin: unset;
  }
`;

const cardItemCss = css`
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0px 3px 6px hsl(0 0% 0% / .15), 0px 2px 4px hsl(0 0% 0% / .1);
  border: 1px solid #f7f7f7;

  & a {
    color: #3a3a3a;
  }

  & h3 {
    position: relative;
    margin-bottom: 10px;
    padding-bottom: 10px;

    &:after {
      position: absolute;
      width: 50px;
      height: 2px;
      content: "";
      background-color: #ff641a;
      bottom: 0;
      left: 0;
    }
  }
  
`;

function ResourcesCards(){
  return(
    <div css={cardsContainerCss}>
      {
        tableData.map((item) => {
          return(
            <div css={cardItemCss}>
              <article>
                <a href={item.href} target="_blank">
                  <h3>{item.name}</h3>
                  
                  <p>{item.description}</p>
                </a>
              </article>
            </div>
          )
        })
      }
    </div>
  )
}

export default ResourcesCards