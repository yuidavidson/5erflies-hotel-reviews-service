import React from 'react';

const Fixture = (
  <div>
    <input id="checked" defaultChecked />
    <input id="not" defaultChecked={false} />
    <input id="tertiary" defaultChecked checked={false} />
  </div>
);

export default Fixture;
