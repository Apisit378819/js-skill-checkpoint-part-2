// เริ่มเขียนโค้ดตรงนี้
const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
}

const handleResponse = (response) => {
    return response.json()
  };

const dataUsers = (data) => {
    console.log(data)
    const longUser = data.map(data => {
        console.log(data.name.length)
        return data.name
    }).filter(name => {
         return name.length > 17
    }) 
    console.log(longUser)
  };

getUsers()
.then(handleResponse)
.then(dataUsers)
.catch(console.log("Error"))





