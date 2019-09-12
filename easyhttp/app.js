//CONSUMING A REST API
const http = new easyHTTP;

const data = {
  userId: '2',
  id: '3',
  tittle: 'Post Test'
};

// Get 
http.get('https://jsonplaceholder.typicode.com/posts', function (error, post) {
  if (error) {
    console.log(error)
  } else {
    console.log(post);
  }
})

// Post
http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
})

// Put
http.put('https://jsonplaceholder.typicode.com/posts/3', data, function (error, message) {
  if (error) {
    console.log('Error: ' + error);
  } else {
    console.log(message)
  }
})

// Delete
http.delete('https://jsonplaceholder.typicode.com/posts/3', function (error, message) {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
})