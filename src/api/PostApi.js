import initialState from "../reducers/PostReducer";
import "isomorphic-fetch";
var key = config.API_KEY;
class PostApi {  
    static loadPosts() {
      return fetch("https://user-feedback-testdata.firebaseio.com/.json?auth="+key)
      .then(response => {
        return response.json();
      }).catch(error => {
        return initialState;
      });
    }

    static addPost(post){
      const url = "https://user-feedback-testdata.firebaseio.com/.json?auth="+key;
        let data = (JSON.stringify(post));
        const request = new Request(url,{
          method: 'POST',  
          headers: new Headers({
              'Content-Type': 'application/json'  
        }),
        body: data
      });
      return fetch(request)
      .then( () => { 
        return fetch(url).then(response => {
          return response.json();
        }).catch(error => {
          return initialState;
        });
      }).catch(error => {
        return error;
      });
    }

    static deletePost(postId){
      const url = "https://user-feedback-testdata.firebaseio.com/"+postId+".json?auth="+key;
      const listUrl = "https://user-feedback-testdata.firebaseio.com/.json?auth="+key;
      const request = new Request(url,{
        method: 'DELETE',
      });
      return fetch(request)
      .then( () => { 
        return fetch(listUrl).then(response => {
          return response.json();
        }).catch(error => {
          return initialState;
        });
      }).catch(error => {
        return error;
      });
        
    }
}
  
export default PostApi;