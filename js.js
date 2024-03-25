async function iterateWithAsyncAwait(array) {
  for (const value of array) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}



const api = 'https://example.com'
async function fetchData() {
    try {
        const response = await fetch(api)

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json()

        console.log('Data from the API:', data)

    } catch (error) {
        console.error('Error fetching data:', error)
    }
}





async function awaitCall() {
    try {

      await fetch('https://example.com')
        console.log('API call successful')
    } catch (error) {
        console.error('Failed to fetch data from the API:', error.message)
    }
}

async function asyncOperation(message) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(message)
}

async function chainedAsyncFunctions() {
    try {
        await asyncOperation('First async function completed')

        await asyncOperation('Second async function completed')

        await asyncOperation('Third async function completed')
    } catch (error) {
        console.error('Error in chainedAsyncFunctions:', error.message)
    }
}
awaitCall()
chainedAsyncFunctions()
