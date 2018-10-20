import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { MapView } from 'expo';
import * as actions from '../actions';
import Swipe from '../components/Swipe';
import { Entypo } from '@expo/vector-icons';
import { timeSince } from '../utils/time';


class DeckScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Jobs',
    headerStyle: {
      // marginTop: Platform.OS === 'android' ?  Expo.Constants.statusBarHeight : 0
    }

  })


  renderCard(job) {
    const initialRegion = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02,
    }
    return (
      <Card
        title={job.title}
        key={job.id}
        image={job.company_logo ? { uri: job.company_logo } : { uri: "https://cdn.pixabay.com/photo/2017/10/31/09/55/dream-job-2904780_1280.jpg" }}
        imageProps={{ resizeMode: 'contain' }}
        imageStyle={{
          width: 250,
          height: 150,
          alignSelf: 'center'
        }}
      >
        {/* <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          >
          </MapView>

        </View> */}
        <View style={styles.detailWrapper}>
          <Text style={styles.italics}>{job.company}</Text>
          <Text style={styles.italics}>{job.type}</Text>

        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.normal}>{job.location}</Text>
          <Text style={styles.normal}>{timeSince(job.created_at)}</Text>
        </View>
      </Card>
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card title="No More Jobs">
        <Button
          title="Back To Map"
          icon={
            <Entypo
              name='location'
              color='white'
            />
          }
          buttonStyle={{
            backgroundColor: '#009688',
            width: 250,
            height: 45,
            alignSelf: 'center'
          }}
          onPress={() => this.props.navigation.navigate('MapTab')}
        />
      </Card>
    )
  }

  render() {
    return (

      <View>
        {/* {console.log(this.props.jobs)} */}
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp="id"
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
  italics: {
    fontStyle: 'italic',
    fontSize: 18,
  },
  normal: {
    fontStyle: 'normal',
    fontSize: 16,
  },
})

function mapStateToProps({ jobs }) {
  return { jobs: jobs };

}
export default connect(mapStateToProps, actions)(DeckScreen);