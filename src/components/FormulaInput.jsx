import React, {useContext} from 'react'

import FormCard from './lightning/FormCard'
import { Textarea } from '@salesforce/design-system-react'

import ReturnType from './ReturnType'

import { FormulaStateContext, FormulaDispatchContext } from '../contexts'

const FormulaInput = () => {
  const state = useContext(FormulaStateContext)
  const dispatch = useContext(FormulaDispatchContext)

  return (
    <FormCard id='formula-input' testId='formula-input'  heading='Formula' icon='formula'>
      <div className='slds-form slds-size_12-of-12'>
        <div className='slds-form-element slds-form-element_stacked'>
          <ReturnType returnType={state.returnType} dispatch={dispatch} />
        </div>
        <div className='slds-form-element slds-form-element_stacked'>
            <Textarea
              id='formula-input'
              autoFocus={ true }
              placeholder='Start typing your formula'
              value={state.inputFormula}
              className={['slds-text-font_monospace']}
              onChange={ (event) => { dispatch({type: 'REQUEST_FORMULA_CHANGE', value: event.target.value}) } }
              errorText={ state.lastError }
              maxLength='3900' />
        </div>
        </div>
      </FormCard>
  )
}

export default FormulaInput
