import React from 'react';

import FormCard from './lightning/FormCard';
import FormElement from './lightning/FormElement';
import { Textarea, Spinner } from '@salesforce/design-system-react';

import './FormulaOutput.css';

function FormulaOutput({value, processing}) {
  return (
    <FormCard id='formula-output' heading='Result' icon='note'>
      <FormElement size={12}>
        {
          processing ?  <Spinner
                          containerClassName={['formula-spinner']}
                          size='large'
                          variant='base'
                          assistiveText={{ label: 'Calculating Formula' }}
                        /> : <Textarea
                                id="formula"
                                value={value}
                                className={['slds-text-font_monospace']}
                                disabled />
        }

      </FormElement>
    </FormCard>
  )
}

export default FormulaOutput;
