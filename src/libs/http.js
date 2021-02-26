class Http {
  static instance = new Http()
  server = 'https://jsonplaceholder.typicode.com/posts/'

  get = async (query) => {
    try {
      const response = await fetch(`${this.server}${query}`)
      const parsed = await response.json()

      return parsed
    } catch (err) {
      throw Error(err)
    }
  }

  post = async (body) => {
    try {
      const response = await fetch(`${this.server}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json'
        }
      })

      const parsed = await response.json()

      return parsed
    } catch (err) {
      throw Error(err)
    }
  }

  put = async (params, updates) => {
    try {
      const response = await fetch(`${this.server}${params}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
        headers: {
          'Content-type': 'application/json'
        }
      })
  
      const parsed = response.json()
  
      return parsed
      
    } catch (err) {
      throw Error(err)
    }
  }

  delete = async (params) => {
    try {
      const response = await window.fetch(`${this.server}${params}`,
        {
          method: 'DELETE',
        })
        
      const parsed = await response.json()

      return parsed
    } catch (err) {
      throw Error(err)
    }
  }
}

export default Http