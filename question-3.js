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
        console.log(data.name)
    }).filter(data => {
        console.log(data.length > 17)
    }) //เศร้าเลยคำตอบไม่ออก ที่เศร้ากว่าคือจำไม่ได้ TT
  };

getUsers()
.then(handleResponse)
.then(dataUsers)





