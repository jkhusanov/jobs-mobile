import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Swipe from '../components/Swipe';

class DeckScreen extends React.Component {
  render() {
    return (

      <View>
        {console.log(this.props.jobs)}
        {/* <Swipe
          data={this.props.jobs}

        /> */}

      </View>
    )
  }
}
function mapStateToProps({ jobs }) {
  return { jobs: jobs };

}
export default connect(mapStateToProps)(DeckScreen);