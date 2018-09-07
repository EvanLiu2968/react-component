import Markdown from '../../../libs/markdown';

import './style.scss';

export default class Qrcode extends Markdown {
  document(locale) {
    return require(`../../docs/${locale}/qrcode.md`);
  }
}
