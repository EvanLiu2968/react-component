/**
 * react-lazyload
 */
import React from 'react'
import LazyLoad, { forceCheck } from './lazyload';
import './index.css'

class ImgLazyLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  componentDidMount(){
    // forceCheck()
  }
  onLazyLoad(component){
    let img = new Image();
    img.src = this.props.src;
    if (img.complete) {
      this.loadedHandle()
      return;
    }
    img.onload = ()=> {
      this.loadedHandle()
    };
  }
  loadedHandle(){
    this.setState({
      loaded:true
    })
  }

  render() {
    let imgClassName = this.props.animate ? `lazyload-animated lazyload-${this.props.animate}` : ``
    return (
      <LazyLoad {...this.props} onLazyLoad={this.onLazyLoad.bind(this)}>
        { this.state.loaded ? 
        <img className={imgClassName} src={this.props.src} />
        :
        this.props.placeholder }
      </LazyLoad>
    );
  }
};

ImgLazyLoad.defaultProps = {
  placeholder:<div className="img-placeholder"></div>,
  animate:'fadeIn', //'fadein' 'blurIn'
  overflow: false,
  once:true
};

LazyLoad.Img = ImgLazyLoad

export default LazyLoad

/* HOC Lazyload Component */
const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';

export const lazyload = (options = {}) => function (WrappedComponent) {
  return class LazyLoadDecorated extends Component {
    constructor() {
      super();
      this.displayName = `LazyLoad${getDisplayName(WrappedComponent)}`;
    }

    render() {
      return (
        <LazyLoad {...options}>
          <WrappedComponent {...this.props} />
        </LazyLoad>
      );
    }
  };
};