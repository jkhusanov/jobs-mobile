import React from 'react';
import { View, Text, Platform, ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements'
import { connect } from 'react-redux'; 

class ReviewScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Review Jobs',
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="Settings"
        titleStyle={{ color: "rgba(0, 122, 255, 1)" }}
        buttonStyle={{
          backgroundColor: "rgba(0, 0, 0, 0)"
        }
        }
        clear
      />
    ),
    headerStyle: {
      // marginTop: Platform.OS === 'android' ?  Expo.Constants.statusBarHeight : 0
    }

  })

  renderLikedJobs() {
    return this.props.likedJobs.map(job => {
      return (
        <Card
          key={job.id}
        >
          <View style={{ height: 200 }}>
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.created_at}</Text>
            </View>
          </View>
        </Card>
      )
    })
  }

  render() {
    return (
      <View>
        <ScrollView>
          {this.renderLikedJobs()}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  detailWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  italics: {
    fontStyle: 'italic',
  }
})
function mapStateToProps(state) {
  return { likedJobs: state.likedJobs }
}

export default connect(mapStateToProps)(ReviewScreen);