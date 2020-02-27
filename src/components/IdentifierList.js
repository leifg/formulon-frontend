import React from 'react';
import FormCard from './lightning/FormCard';
import Row from './lightning/Row';
import Column from './lightning/Column';
import Identifier from './Identifier'

function IdentifierList({identifiers, dispatch}) {
  return (
    <FormCard id='identifier-list' heading='variables' icon='calibration'>
      {
        identifiers.map((identifier) =>
          <Row key={identifier.name} padded>
            <Column padded>
              <Identifier
                name={identifier.name}
                type={identifier.type}
                value={identifier.value}
                options={identifier.options}
                dispatch={dispatch} />
            </Column>
          </Row>)
      }
    </FormCard>
  )
}

export default IdentifierList;
