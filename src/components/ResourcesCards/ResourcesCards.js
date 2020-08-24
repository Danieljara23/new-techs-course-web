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
  box-shadow: 0px 2px 3px lightgrey;
  border: 1px solid #f7f7f7;
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