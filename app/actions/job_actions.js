import axios from 'axios';
import qs from 'qs';
import {
  FETCH_JOBS,
  LIKE_JOB,
  CLEAR_LIKED_JOBS
} from './types';

const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?'
const JOB_QUERY_PARAMS = {

}

const buildJobsUrl = (location) => {
  const query = qs.stringify({ lat: location.latitude, long: location.longitude });
  return `${JOB_ROOT_URL}${query}`
}

export const fetchJobs = (region, callback) => async (dispatch) => {
  const url = buildJobsUrl(region);
  let { data } = await axios.get(url);
  dispatch({ type: FETCH_JOBS, payload: data});
  // console.log(data)
  callback();
};

export const likeJob = (job) => {
  return {
    payload: job,
    type: LIKE_JOB
  };
}

export const clearLikedJobs = () => {
  return { type: CLEAR_LIKED_JOBS };
}