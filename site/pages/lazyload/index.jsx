import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Lazyload extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/lazyload.md`);
  }
}
