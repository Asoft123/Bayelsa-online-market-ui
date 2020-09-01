import http  from './httpService';
import { apiUrl } from '../config.json';
const apiEndpoint = `${apiUrl}/marketers`;


export function getMarketerUrl(id){
 return `${apiEndpoint}/${id}` 
}

export function getMarketers() {
  return http.get(apiEndpoint)
}

export function getSingleMarketer(marketerId) {
  return http.get(getMarketerUrl(marketerId));
}

export function updateMarketer(marketer) {
  if(marketer._id){
      const body = {...marketer};
      delete body._id;
      return http.put(getMarketerUrl(marketer._id), body)
  }

      return http.post(apiEndpoint, marketer)
}

export function deleteMarketer(marketerId) {
  return http.delete(getMarketerUrl(marketerId))
}

export function listNewMarketer(marketer) {
  return http.post(`${apiEndpoint}`, marketer)
}


export function getUserListedMarketers(userid){
  return http.get(`${apiEndpoint}/uploadby/${userid}`)
}