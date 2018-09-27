import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Swipe from '../components/Swipe';
import { Card, Button } from 'react-native-elements';

class DeckScreen extends React.Component {

  renderCard(job) {
    return (
      <Card 
        title={job.title}
      >
      <View style={styles.detailWrapper}>
        <Text>{job.company}</Text>
        <Text>{job.created_at}</Text>
      </View>
      <Text>{job.type}</Text>
      </Card>
    );
  }


  render() {
    return (

      <View>
        {console.log(this.props.jobs)}
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
        />

      </View>
    )
  }
}
const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
})

function mapStateToProps({ jobs }) {
  return { jobs: jobs };

}
export default connect(mapStateToProps)(DeckScreen);