import axios from 'axios'
/* eslint-disable */

const config = {
  headers: {
    token: localStorage.getItem('token')
  }
}

window.fbAsyncInit = function() {
  FB.init({
    appId: '1821615668138371',
    cookie: false,
    xfbml: false,
    status: false,
    version: 'v2.12'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

const service = {
  isLogged () {

  },
  fbLogin () {
    return new Promise((resolve, reject) => {
      FB.login((result) => {
        if (result.authResponse) {
          const accessToken = result.authResponse.accessToken
          axios
            .post('http://localhost:1337/auth/facebook', { accessToken })
            .then(response => {
              const token = response.data.token
              if (token) {
                localStorage.setItem('token', token)

              }
              resolve(response)
            })
            .catch(err => reject(err))
        } else {
          reject()
        }
      })
    })
  },
  async getTopic (id) {
    const config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    try {
      const response = await axios.get(`http://localhost:1337/topic/${id}`, config)
      return response.data
    } catch (err) {
      return err
    }
  },
  async getTopTopic (limit = 1) {
    const config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    try {
      const response = await axios.get(`http://localhost:1337/topic?limit=${limit}`, config)
      return response.data
    } catch (err) {
      return err
    }
  },
  async getRecentTopic (limit = 1) {
    const config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    try {
      const response = await axios.get(`http://localhost:1337/recentTopic?limit=${limit}`, config)
      return response.data
    } catch (err) {
      return err
    }
  },
  async upvote (id, score) {
    const config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    try {
      const response = await axios.put(`http://localhost:1337/topic/${id}`, {score}, config)
      return response.data
    } catch (err) {
      return err
    }
  },
  async create (topic) {
    const config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    try {
      const response = await axios.post(`http://localhost:1337/topic`, topic, config)
      return response.data
    } catch (err) {
      return err
    }
  },
  async addComment (id, text) {
    const config = {
      headers: {
        token: localStorage.getItem('token')
      }
    }
    try {
      const response = await axios.post(`http://localhost:1337/topic/${id}/comment`, { text }, config)
      return response.data
    } catch (err) {
      return err
    }
  }

}

export default service
