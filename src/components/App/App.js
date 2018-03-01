import React, { Component } from 'react'
import FirstPage from "../FirstPage"
import SecondPage from "../SecondPage"

const HEADER_TITLE = "სლამი • Slami"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { currentPage: 0, slides: [] }
  }

  renderCurrentPage() {
      switch(this.state.currentPage) {
        case 0: return <FirstPage onNextPage={(media) => this.onFinishFirstPage(media)} />; break;
        case 1: return <SecondPage slides={this.state.slides} />; break;
    }
  }

  onFinishFirstPage(media) {
    this.setState({ currentPage: 1, slides: media })
  }

  render() {
    return (
      <div className="blue-grey lighten-1">
        <header style={styles.headerTitle} >
          <h2 className="amber-text text-darken-3">{HEADER_TITLE}</h2>
        </header>

        <div className="page-container">
          {this.renderCurrentPage()}
        </div>

        <footer className="footer">
          <div style={{height: 200, backgroundColor: "orange"}}/>
        </footer>
      </div>
    );
  }
}

const styles = {
  headerTitle: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 20,
  }
}

export default App;
