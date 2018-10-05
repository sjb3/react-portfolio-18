import React from 'react';

export default props => (
  <form onSubmit={props.getTemperature}>
    <input type="text" name="temperatureSearch" />
    <button>
Get Temperature
    </button>
  </form>
);
