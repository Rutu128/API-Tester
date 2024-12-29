// utils/apiUtils.js
export const sendRequest = async (url, method, headers, body) => {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers.reduce((acc, header) => {
          if (header.key && header.value) {
            acc[header.key] = header.value;
          }
          return acc;
        }, {})
      }
    };
  
    if (method !== 'GET' && body) {
      options.body = body;
    }
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      
      // Save to history
      const historyItem = {
        url,
        method,
        headers,
        body,
        response: data,
        timestamp: new Date().toISOString()
      };
      
      const history = JSON.parse(localStorage.getItem('apiHistory') || '[]');
      history.unshift(historyItem);
      localStorage.setItem('apiHistory', JSON.stringify(history.slice(0, 50))); // Keep last 50 requests
      
      return data;
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  };