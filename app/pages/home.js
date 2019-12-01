import React, { Component } from 'react'
import {
  SectionList,
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
  View,
  TextInput,
  Alert
} from 'react-native'
import Button from '@ant-design/react-native/lib/button'
import Bananas from 'app/components/common/Bananas'
import { connect } from 'react-redux'
import { increase, decrease, reset } from 'app/actions/home'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Duuliy',
      text: ''
    }
  }

  _onPressReset() {
    this.props.dispatch(reset())
  }

  _onPressInc() {
    this.props.dispatch(increase())
  }

  _onPressDec() {
    this.props.dispatch(decrease())
  }

  render() {
    const { name } = this.state
    return (
      <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, height: 100 }}></View>
        <View>
          <TextInput
            style={{
              height: 40, borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: 1
            }}
            placeholder="请输入。。。。。。。"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <Text style={{
            padding: 10,
            fontSize: 42
          }}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Bananas name={name} />
        </View>
        <View style={{ backgroundColor: 'steelblue' }} >
          <Button onPress={() => {
            Alert.alert('你触发了事件！')
          }}>duuliy点击我</Button>
        </View>

        <View >
          <Text >{this.props.count}</Text>
          <Button onPress={() => this._onPressReset()}>归零</Button>
          <Button onPress={() => this._onPressInc()}>加1</Button>
          <Button onPress={() => this._onPressDec()}>减1</Button>

        </View>

        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />

        <View style={styles.container}>
          <SectionList
            sections={[
              { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
              { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] }
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>

      </ScrollView >
    )
  }

  componentDidMount() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 40,
    height: 80
  }
})

// const mapStateToProps = ({home}) => ({
//   count: home.count
// })

// export default connect(mapStateToProps)(Home)
export default connect(({ home }) => ({
  count: home.count
}))(Home)