import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    count: 0,
    headCount: 0,
    tailCount: 0,
  }

  onTossCoin = () => {
    const tossList = ['HEAD', 'TAIL']
    this.setState(prevState => ({count: prevState.count + 1}))
    const randomNum = Math.ceil(Math.random() * 2) - 1
    const tossValue = tossList[randomNum]
    if (tossValue === 'HEAD') {
      this.setState({isHead: true})
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState({isHead: false})
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
    }
  }

  render() {
    const {isHead, count, headCount, tailCount} = this.state
    console.log(isHead)
    console.log(count)
    console.log(headCount)
    console.log(tailCount)
    const tailSrc = {
      src: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      alt: 'tail',
    }

    const headSrc = {
      src: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      alt: 'head',
    }

    const className = isHead ? headSrc : tailSrc
    return (
      <div className="main-container">
        <div className="content-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={className.src} alt="toss result" />
          <div className="button-container">
            <button type="button" onClick={this.onTossCoin}>
              Toss Coin
            </button>
          </div>
          <div className="span-container">
            <p>Total: {count}</p>
            <p>Heads: {headCount}</p>
            <p>Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
