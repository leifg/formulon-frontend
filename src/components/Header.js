import React from 'react';

import { AppLauncher, IconSettings, GlobalNavigationBar, GlobalNavigationBarLink, GlobalNavigationBarRegion } from '@salesforce/design-system-react';

function Footer() {
  return (
    <IconSettings iconPath='/assets/icons'>
      <GlobalNavigationBar>
        <GlobalNavigationBarRegion region="primary">
          <AppLauncher triggerName="Formulon" children={[]} />
        </GlobalNavigationBarRegion>

        <GlobalNavigationBarRegion region="secondary" navigation>
          <GlobalNavigationBarLink active label="Feedback" id="feedback-link" href="mailto:formulon@leif.io"/>
        </GlobalNavigationBarRegion>
      </GlobalNavigationBar>
    </IconSettings>
  )
}

export default Footer;
