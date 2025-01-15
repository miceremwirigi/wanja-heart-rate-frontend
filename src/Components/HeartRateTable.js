import React, { useEffect, useState } from 'react';

function HeartRateTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://phr-backend.onrender.com/api/heartmonitorentries')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const formatDate = (dateString) => {
    // Extract the date and time part from the string
    const dateTimeString = dateString.split(' ')[0] + 'T' + dateString.split(' ')[1];
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Africa/Nairobi' };
    return new Date(dateTimeString).toLocaleString('en-US', options);
  };

  return (
    <div>
      <h1>Heart Rate Data</h1>
      <table>
        <thead>
          <tr>
            <th>Heart Rate</th>
            <th>Recorded At</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.heart_rate}</td>
              <td>{formatDate(item.recorded_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HeartRateTable;