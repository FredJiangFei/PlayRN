import client from './client'

const endpoint = '/teams'

const getTeams = () =>  client.get(endpoint)

export default {
  getTeams,
}
