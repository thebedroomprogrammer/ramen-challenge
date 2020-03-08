import { cssRaw, style } from "typestyle";

const appContainer = style({
    maxWidth:460,
    position:"relative",
    margin:"0 auto"
});

cssRaw(`
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, pre, a, img, ins, ol, ul, li, form, label, figure, footer, header, nav, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  scroll-behaviour: smooth;
}
body{
    background-color:#f5f6f7;
}
`);

export default {
    appContainer
}