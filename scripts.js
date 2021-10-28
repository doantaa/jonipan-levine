fetch('https://v1.nocodeapi.com/icedog/medium/dozBhiodtOoMoRcN')
    .then (res => {
        return res.json();
})
    .then (data => console.log(data))
    .catch(error => console.log('ERROR'))
