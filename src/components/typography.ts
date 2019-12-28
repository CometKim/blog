import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import oc from 'open-color';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.66,
  headerFontFamily: ['-apple-system', 'Noto Sans KR', 'sans-serif'],
  bodyFontFamily: ['-apple-system', 'Noto Sans KR', 'sans-serif'],
  headerLineHeight: 1.5,
  bodyColor: oc.gray[8],
  bodyWeight: 300,
  headerColor: oc.gray[9],
  headerWeight: 700,
  plugins: [new CodePlugin()],
});

export default typography;
