import { useState } from 'react';
import RequestHeaders from './RequestHeaders';
import RequestBody from './RequestBody';
import { sendRequest } from '../../utils/apiUtils';

const ApiTester = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [headers, setHeaders] = useState([{ key: '', value: '' }]);
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await sendRequest(url, method, headers, body);
      setResponse(result);
    } catch (error) {
      setResponse({ error: error.message });
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          >
            {['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter API URL"
            className="flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>

        <RequestHeaders headers={headers} setHeaders={setHeaders} />
        <RequestBody body={body} setBody={setBody} method={method} />
      </form>

      {response && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Response</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApiTester;