import fetch from 'app/utils/request'
//组织机构
const GetByQuery = data => fetch('post', '/api/Organization/GetByQuery', data)
const GetData = () => fetch('get', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg')

export {
  GetByQuery,
  GetData
}