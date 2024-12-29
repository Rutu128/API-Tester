import PropTypes from 'prop-types';

const ResponseView = ({ response }) => {
    if (!response) return null
  
    return (
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium mb-2">Response Details</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="font-medium">Status:</span>{' '}
              <span className={response.status >= 200 && response.status < 300 ? 'text-green-600' : 'text-red-600'}>
                {response.status}
              </span>
            </div>
            <div>
              <span className="font-medium">Time:</span> {response.time}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Response Data:</h4>
              <pre className="bg-white p-4 rounded-md overflow-auto max-h-96 text-sm">
                {JSON.stringify(response.data, null, 2)}
              </pre>
            </div>
            <div>
              <h4 className="font-medium mb-2">Headers:</h4>
              <pre className="bg-white p-4 rounded-md overflow-auto max-h-96 text-sm">
                {JSON.stringify(response.headers, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
}

ResponseView.propTypes = {
  response: PropTypes.shape({
    status: PropTypes.number,
    time: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    headers: PropTypes.object,
  }),
};

export default ResponseView;