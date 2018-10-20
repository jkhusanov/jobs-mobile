import React from 'react';
import { View, Text, Platform, ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements'
import { connect } from 'react-redux';
import { WebBrowser } from 'expo';
import { timeSince } from '../utils/time';

class ReviewScreen extends React.Component {
  state = {
    result: null,
  };
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Saved Jobs',
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
      const { id, company, created_at, url, title, company_logo } = job;
      return (
        <Card
          key={id}
          title={title}
          image={company_logo ? { uri: company_logo } : { uri: "https://cdn.pixabay.com/photo/2017/10/31/09/55/dream-job-2904780_1280.jpg" }}
          imageProps={{ resizeMode: 'contain' }}
          imageStyle={{
            width: 250,
            height: 150,
            alignSelf: 'center'
          }}
        >
          <View style={{ height: 130 }}>
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{job.type}</Text>
            </View>
            <View style={styles.detailWrapper}>
              <Text style={styles.normal}>{job.location}</Text>
              <Text style={styles.normal}>{timeSince(job.created_at)}</Text>
            </View>
            <Button
              title="Apply Now!"
              titleStyle={{ fontWeight: "600" }}
              buttonStyle={{
                backgroundColor: '#009688',
                width: 250,
                height: 45,
                alignSelf: 'center'
              }}
              onPress={() => this._handlePressButtonAsync(url)}
            />
          </View>
        </Card>
      )
    })
  }
  _handlePressButtonAsync = async (url) => {
    let result = await WebBrowser.openBrowserAsync(url);
    // this.setState({ result });
  };

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
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  italics: {
    fontStyle: 'italic',
    fontSize: 18,
  },
  normal: {
    fontStyle: 'normal',
    fontSize: 16,
  },
})
function mapStateToProps(state) {
  return { likedJobs: state.likedJobs }
}

export default connect(mapStateToProps)(ReviewScreen);