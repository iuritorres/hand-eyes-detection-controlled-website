onmessage = ({ data }) => {
    console.log('worker!', data)

    postMessage({
        response: 'ok'
    })
}