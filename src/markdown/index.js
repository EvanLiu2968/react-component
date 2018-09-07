/* 
 * markdown
 */
import React from 'react'
// import webInject from 'web-inject'
import './index.css'

// http://www.bootcdn.cn/highlight.js/
// https://cdn.bootcss.com/highlight.js/9.12.0/styles/github.min.css
// https://cdn.bootcss.com/highlight.js/9.12.0/styles/googlecode.min.css
// webInject.css('https://cdn.bootcss.com/highlight.js/9.12.0/styles/vs.min.css')
// https://github.com/jonschlinkert/remarkable
var Remarkable = require('remarkable');
var hljs = require('highlight.js');
var markdown = new Remarkable({
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     true,        // Use '/' to close single tags (<br />)
  breaks:       true,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks
  linkify:      true,        // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(lang, str).value;
        } catch (err) {
          console.log(err)
        }
    }
    try {
        return hljs.highlightAuto(str).value;
    } catch (err) {
      console.log(err)
    }
    return str; // use external default escaping
  }
})

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={this.props.style} className={this.props.className}>
        <article className="markdown-body" dangerouslySetInnerHTML={{__html:markdown.render(this.props.markdown)}}></article>
      </div>
    )
  }
}