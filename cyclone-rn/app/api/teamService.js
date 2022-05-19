import client from './client';

const endpoint = '/teams.json';

const getTeams = () => client.get(endpoint);
const createTeam = () => client.post(endpoint, { name: 'team 1' });

export default {
  getTeams,
  createTeam,
};
