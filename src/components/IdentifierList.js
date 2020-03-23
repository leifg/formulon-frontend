import React, {useContext} from 'react'
import FormCard from './lightning/FormCard'
import Row from './lightning/Row'
import Column from './lightning/Column'
import Identifier from './Identifier'

import { FormulaStateContext, FormulaDispatchContext } from '../contexts'

const IdentifierList = () => {
  const state = useContext(FormulaStateContext)
  const dispatch = useContext(FormulaDispatchContext)

  return (
    <FormCard id='identifier-list' heading='Variables' icon='calibration'>
      {
        state.identifiers.map((identifier) =>
          <Row key={identifier.name} padded>
            <Column padded>
              <Identifier
                name={identifier.name}
                type={identifier.dataType}
                value={identifier.value}
                options={identifier.options}
                dispatch={dispatch}
              />
            </Column>
          </Row>)
      }
    </FormCard>
  )
}

export default IdentifierList
