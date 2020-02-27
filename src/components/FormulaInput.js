import React from 'react';

import FormCard from './lightning/FormCard';
import FormElement from './lightning/FormElement';
import { Textarea } from '@salesforce/design-system-react';

function FormulaInput({dispatch, errorText, ...props}) {
  return (
    <FormCard id='formula-input' heading='Formula' icon='formula'>
      <FormElement size={12}>
        <Textarea
          id='formula-input'
          autoFocus={ true }
          placeholder='Start typing your formula'
          className={['slds-text-font_monospace']}
          onChange={ (event) => { dispatch({type: 'CHANGE_FORMULA', value: event.target.value}) } }
          errorText={ errorText }
          maxLength='3900' />
      </FormElement>
    </FormCard>
  )
}



export default FormulaInput;
