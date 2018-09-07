import React from 'react'
import PropTypes from 'prop-types'
import qrcode from 'qrcode'
import merge from 'lodash/merge'

function generateQRCode(url, options){
  options = merge({
    margin: 1,
    width: 200,
    scale: 4,
    color: {
      dark: '#000000ff', //6位颜色+2位明度，支持3位、4位、6位、8位
      light: '#ffffffff',
    },
    // type: 'png',
    // rendererOpts: {
    //   quality: 0.3,
    //   width: 200,
    //   height: 200,
    // }
    // version: 7,                      // Calculated QR Code version (1 - 40) 版本越高点数越多越密，容纳数据越多
    // errorCorrectionLevel: 'Q',       // Error Correction Level [choices: "L", "M", "Q", "H"]
    // maskPattern: 4                   // Calculated Mask pattern (0 - 7)
  }, options)
  // 可用于浏览器端和node端
  return new Promise((resolve, reject) => {
    qrcode.toDataURL(url, options , function (err, data) {
      if(err){
        reject(err)
      }
      resolve(data) //返回 data:image/png;base64,...
    })
  })
}

/* 
 * test
*/
// generateQRCode('www.evanliu2968.com.cn').then((data)=>{
//   data = data.replace(/^(data:image\/(png|jpg|jpeg);base64,)/,'')
//   fs.writeFile('qrcode.png',new Buffer(data,'base64'),(err)=>{
//     if(err){
//       console.log('生成二维码错误')
//     }else{
//       console.log('生成二维码成功')
//     }
//   })
// })

class Qrcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ''
    }
  }
  componentDidMount(){
    this.work()
  }
  componentWillReceiveProps(props){
    this.props = props
    this.work()
  }
  work = ()=>{
    generateQRCode(this.props.url, {
      width: this.props.width,
      color: {
        dark: this.props.color,
        light: this.props.bgColor,
      },
      margin: this.state.margin,
      scale: this.props.scale
    }).then((src)=>{
      this.setState({
        src: src
      })
    })
  }
  render(){
    return <img className={this.props.className} src={this.state.src} />
  }
}

Qrcode.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  margin: PropTypes.number,
  scale: PropTypes.number,
  className: PropTypes.string.isRequired
}

Qrcode.defaultProps = {
  url: '',
  logo: '',
  width: 200,
  color: '#000000ff',
  bgColor: '#ffffffff',
  margin: 1,
  scale: 4,
  className: 'qrcode'
};

export default Qrcode