import { post } from 'api'

export default {
  edit (payload) {
    return post('/project/edit_project_information', payload)
  }
}
