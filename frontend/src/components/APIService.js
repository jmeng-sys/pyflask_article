

export default class APIService {
    static UpdateArticle(id, body) {
        return fetch(`http://us-cdbr-east-06.cleardb.net:3306/update/${id}/`, {
            'method':'PUT',
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }

    static AddArticle(body) {
        return fetch(`us-cdbr-east-06.cleardb.net:3306/add`, {
            'method':'POST',
            headers: {
              'Content-Type':'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(resp => resp.json())
    }

    static DeleteArticle(id) {
        return fetch(`us-cdbr-east-06.cleardb.net:3306/delete/${id}/`, {
            'method':'DELETE',
            headers: {
              'Content-Type':'application/json'
            },
          })
    }
}