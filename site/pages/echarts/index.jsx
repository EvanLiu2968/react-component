import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Echarts extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/echarts.md`);
  }
}
