// ApiTester/RequestBody.jsx
import PropTypes from 'prop-types';

const RequestBody = ({ body, setBody, method }) => {
  if (method === 'GET') return null;

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Request Body</h3>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter request body (JSON)"
        className="w-full h-40 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
};

RequestBody.propTypes = {
  body: PropTypes.string.isRequired,
  setBody: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default RequestBody;