const getPostById = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts/1");
  };
  
  const handleResponse = (response) => {
    return response.json();
  };
  
  const onSuccess = (data) => {
    console.log(data);
  };
  
  getPostById()
  .then(handleResponse)
  .then(onSuccess)
  
  // Start Coding Here 🤩