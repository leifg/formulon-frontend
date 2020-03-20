import React, {useContext} from 'react';

import FormCard from './lightning/FormCard';
import FormElement from './lightning/FormElement';
import { Textarea } from '@salesforce/design-system-react';

import { FormulaStateContext, FormulaDispatchContext } from '../contexts'

const FormulaInput = () => {
  const state = useContext(FormulaStateContext)
  const dispatch = useContext(FormulaDispatchContext)

  return (
    <FormCard id='formula-input' heading='Formula' icon='formula'>
      <FormElement size={12}>
        <Textarea
          id='formula-input'
          autoFocus={ true }
          placeholder='Start typing your formula'
          value={state.inputFormula}
          className={['slds-text-font_monospace']}
          onChange={ (event) => { dispatch({type: 'REQUEST_FORMULA_CHANGE', value: event.target.value}) } }
          errorText={ state.lastError }
          maxLength='3900' />
      </FormElement>
    </FormCard>
  )
}



export default FormulaInput;
