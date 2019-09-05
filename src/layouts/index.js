import { Fragment } from 'react';
function BasicLayout(props) {
  // console.log(props);
  return <Fragment>{props.children}</Fragment>;
}

export default BasicLayout;
