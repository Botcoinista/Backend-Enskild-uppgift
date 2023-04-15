
fetch("http://localhost:9996/api/product/")
.then(res => res.json())
.then(data => {
    console.log(data)
})

.catch(err => {
    console.log(err)
})

