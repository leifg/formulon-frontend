import React from 'react';

import FormCard from './lightning/FormCard';
import FormElement from './lightning/FormElement';
import { Textarea } from '@salesforce/design-system-react';

function FormulaOutput({value, ...props}) {
  return (
    <FormCard id='formula-output' heading='Result' icon='note'>
      <FormElement size={12}>
        <Textarea
          id="formula"
          value={value}
          className={['slds-text-font_monospace']}
          disabled
        />
      </FormElement>
    </FormCard>
  )
}

export default FormulaOutput;
