import { css } from "@emotion/core";
import  Layout  from "../src/Layout/index";
import { device } from '../shared/mediaqueries';

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
`;


function Prologo(){
  return(
    <Layout title="Prólogo">
      <div css={mainContentCss}>
        <h1>Prólogo</h1>
        <p>Veniam consequat labore Lorem anim dolore enim sunt veniam sit excepteur labore minim laborum ipsum. Elit dolore occaecat et adipisicing sit minim elit. Consectetur magna culpa dolore do.</p>
        <p>Tempor nulla nulla laborum et dolore enim cillum do irure quis est. Aliqua fugiat id culpa anim consectetur est. Cupidatat cillum est enim consectetur incididunt anim ad reprehenderit. Fugiat irure cupidatat amet nostrud officia consequat ullamco consequat proident id nulla ea commodo consequat.</p>
        <p>Sunt nulla enim nisi pariatur labore quis reprehenderit esse aute occaecat qui. Sint in proident deserunt consectetur enim dolore ad minim tempor nisi enim. Aliqua reprehenderit exercitation deserunt ex eu reprehenderit Lorem id. Commodo veniam non duis ex ut exercitation est nulla. Aliqua ad irure incididunt consequat tempor. Dolore incididunt dolore cillum pariatur irure nostrud cillum incididunt aliqua.</p>
        <p>Ut est est tempor pariatur et proident. Occaecat esse id cupidatat aute et occaecat minim et eiusmod occaecat quis. Exercitation adipisicing reprehenderit veniam nostrud veniam cupidatat ex. Veniam sunt laboris eu nulla cillum velit cillum est ex irure esse officia. Aliqua sunt consequat irure reprehenderit. Est ipsum in magna sint esse.</p>
        <p>Ex ullamco duis magna sit ipsum ut et. Dolor nostrud consectetur pariatur ad sunt voluptate ea quis esse esse magna sint ullamco. Culpa cillum culpa in nostrud eu cillum elit. Id dolore voluptate ut commodo excepteur consectetur deserunt pariatur mollit sunt. Occaecat tempor aliquip minim id pariatur sit pariatur incididunt.</p>
        <p>Tempor nulla nulla laborum et dolore enim cillum do irure quis est. Aliqua fugiat id culpa anim consectetur est. Cupidatat cillum est enim consectetur incididunt anim ad reprehenderit. Fugiat irure cupidatat amet nostrud officia consequat ullamco consequat proident id nulla ea commodo consequat.</p>
        <p>Sunt nulla enim nisi pariatur labore quis reprehenderit esse aute occaecat qui. Sint in proident deserunt consectetur enim dolore ad minim tempor nisi enim. Aliqua reprehenderit exercitation deserunt ex eu reprehenderit Lorem id. Commodo veniam non duis ex ut exercitation est nulla. Aliqua ad irure incididunt consequat tempor. Dolore incididunt dolore cillum pariatur irure nostrud cillum incididunt aliqua.</p>
        <p>Ut est est tempor pariatur et proident. Occaecat esse id cupidatat aute et occaecat minim et eiusmod occaecat quis. Exercitation adipisicing reprehenderit veniam nostrud veniam cupidatat ex. Veniam sunt laboris eu nulla cillum velit cillum est ex irure esse officia. Aliqua sunt consequat irure reprehenderit. Est ipsum in magna sint esse.</p>
        <p>Ex ullamco duis magna sit ipsum ut et. Dolor nostrud consectetur pariatur ad sunt voluptate ea quis esse esse magna sint ullamco. Culpa cillum culpa in nostrud eu cillum elit. Id dolore voluptate ut commodo excepteur consectetur deserunt pariatur mollit sunt. Occaecat tempor aliquip minim id pariatur sit pariatur incididunt.</p>
      </div>
    </Layout>
  )
}

export default Prologo