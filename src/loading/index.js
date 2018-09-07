/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.scss'

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: props.loading,
      fullscreen: props.fullscreen,
      mounted: false,
    };
  }
  componentWillUnmount() {
    this.enableScroll();
  }
  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

  getStyle(){
    if (this.state.fullscreen) {
      this.disableScroll();

      return {
        display: this.state.loading ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 99999
      }
    } else {
      this.enableScroll();

      return {
        position: 'relative'
      }
    }
  }

  documentBody() {
    if(typeof window !== 'undefined')
    return document.body;
  }

  disableScroll() {
    const documentBody = this.documentBody();
    if (documentBody) {
      documentBody.style.setProperty('overflow', 'hidden');
    }
  }

  enableScroll() {
    const documentBody = this.documentBody();
    if (documentBody) {
      documentBody.style.removeProperty('overflow');
    }
  }
  show(){
    this.setState({
      loading: true
    })
  }
  hide(){
    this.setState({
      loading: false
    })
    if (this.state.fullscreen) {
      this.enableScroll();
    }
  }

  getLoading(type){
    switch (type){
      case 'circular':
        return (
          <svg className="circular" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none" />
          </svg>
        )
      case 'comet':
        return (
          <div className="el-loading-comet">
            <div className="loader"></div>
          </div>
        )
      case 'swell':
        return (
          <div className="el-loading-swell">
            <div className="loader"></div>
          </div>
        )
      case 'stretch':
        return (
          <div className="el-loading-stretch">
            <div className="loader"></div>
          </div>
        )
      default:
        return (
          <svg className="circular" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none" />
          </svg>
        )
    }
  }

  render() {
    const { loading, fullscreen } = this.state;
    const { text, type } = this.props;

    return (
      <div style={this.getStyle()} className={this.props.className}>
        <div
          style={{
            display: 'block',
            position: 'absolute',
            zIndex: 657,
            backgroundColor: 'rgba(255, 255, 255, 0.901961)',
            margin: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }}>
          <div className={'el-loading-spinner'+(fullscreen?' is-full-screen':'')} style={{
            position: 'absolute',
            display: 'inline-block',
            left: 0
          }}>
            { this.getLoading(type)}
            {
              text && <p className="el-loading-text">{text}</p>
            }
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

Loading.propTypes = {
  type: PropTypes.string,
  loading: PropTypes.bool,
  fullscreen: PropTypes.bool,
  text: PropTypes.string
};

Loading.defaultProps = {
  type: 'circular',
  fullscreen: true,
  text: '正在加载中',
  loading: true
};

export default Loading

var component = null, div = null;
export const loading = {
  show: function(){
    div = document.createElement('div');
    document.body.appendChild(div);
    component = new Loading({
      fullscreen: true,
      text: '正在加载中',
      loading: true
    });
    ReactDOM.render(component.render(), div);
  },
  hide: function(){
    if(div){
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
      document.body.style.removeProperty('overflow');
      div = null;
      component = null;
    }
  }
}