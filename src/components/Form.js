import React from 'react';
import {
  Button, Textfield,
} from 'react-mdl';

export default props => (
  <div style={{
    width: '400px', marginRight: 'auto', marginLeft: 'auto', border: '1px #000',
  }}
  >
    <form onSubmit={props.getRecipe} style={{ marginBottom: '2rem' }}>
      <Textfield
        name="recipeName"
        onChange={() => {}}
        label="Recipe search..."
        floatingLabel
        style={{ width: '200px' }}
      />
      <Button>
Search
      </Button>
    </form>
  </div>
);
