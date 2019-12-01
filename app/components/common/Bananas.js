import React, { Component } from 'react'
import { Image, Text, StyleSheet, Alert } from 'react-native'
// import fetch from 'app/utils/request'
import { GetData } from 'app/services/api'
import axios from 'react-native-axios'

export default class Bananas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textData: ''
    }
  }

  getList() {
    GetData().then(res => {
      this.setState({ textData: res.status })
    })
  }

  render() {
    const { textData } = this.state
    const { name, count } = this.props
    console.log(this.textData)
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Text style={[styles.red, styles.bigBlue]} onPress={this.getList}>Hello {name}{count}!</Text>
        <Text style={[styles.red, styles.bigBlue]}>{textData}</Text>
      </>
    )
  }

  componentDidMount() {
    this.getList()
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})
