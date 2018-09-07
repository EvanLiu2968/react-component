import React from 'react'
import PropTypes from 'prop-types'
import qrcode from 'qrcode'
import merge from 'lodash/merge'
// var toSJIS =  require('qrcode/helper/to-sjis')

export const generateQRCode = function (text, options, canvas){
  options = merge({
    margin: 1,
    width: 200,
    scale: 4,
    color: {
      dark: '#000000ff', //6位颜色+2位明度，支持3位、4位、6位、8位
      light: '#ffffffff',
    },
    // toSJISFunc: toSJIS, // 汉字扩展
    // type: 'png',
    // rendererOpts: {
    //   quality: 0.3,
    //   width: 200,
    //   height: 200,
    // }
    // version: 7,                   // Calculated QR Code version (1 - 40) 版本越高点数越多越密，容纳数据越多
    errorCorrectionLevel: 'Q',       // Error Correction Level [choices: "L", "M", "Q", "H"]
    maskPattern: 4                   // Calculated Mask pattern (0 - 7)
  }, options)
  // 可用于浏览器端和node端
  return new Promise((resolve, reject) => {
    if(canvas){
      qrcode.toCanvas(canvas, text, options , function (err, data) {
        if(err){
          reject(err)
        }
        resolve(data)
      })
    }else{
      qrcode.toDataURL(text, options , function (err, data) {
        if(err){
          reject(err)
        }
        resolve(data) //return data:image/png;base64,...
      })
    }
  })
}

class Qrcode extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.work()
  }
  componentWillReceiveProps(props){
    this.props = props
    this.work()
  }
  work = ()=>{
    generateQRCode(this.props.text, merge({}, this.props, {
      color: {
        dark: this.props.color,
        light: this.props.bgColor,
      }
    }), this.node).then((src)=>{
      // this.node.src = src;
      if(this.props.logo){
        let img = new Image();
        img.src = this.props.logo;
        if (img.complete) {
          this.loadedHandle(img)
          return;
        }
        img.onload = ()=> {
          this.loadedHandle(img)
        };
      }
    })
  }
  loadedHandle(img){
    const { width, logoWidth } = this.props;
    const cxt=this.node.getContext("2d");
    const halfWidth = (width-logoWidth)/2;
    cxt.drawImage(img,0,0,img.width,img.height,halfWidth,halfWidth,logoWidth,logoWidth);
  }
  render(){
    return <canvas ref={(e) => { this.node = e; }} className={this.props.className} />
  }
}

Qrcode.propTypes = {
  text: PropTypes.string.isRequired,
  logo: PropTypes.string,
  logoWidth: PropTypes.number,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  margin: PropTypes.number,
  scale: PropTypes.number,
  className: PropTypes.string.isRequired,
  errorCorrectionLevel: PropTypes.string.isRequired,
  maskPattern: PropTypes.number,
}

Qrcode.defaultProps = {
  text: '',
  logo: '',
  logoWidth: 40,
  width: 200,
  color: '#000000ff',
  bgColor: '#ffffffff',
  margin: 1,
  scale: 4,
  className: 'qrcode',
  errorCorrectionLevel: 'Q',
  maskPattern: 4,
};

export default Qrcode