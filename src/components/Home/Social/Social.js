import React from 'react';
import { SocialIcon } from 'react-social-icons';

const styles = {
    iconStyle: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 15
    },
  };

function Social() {
    return (
        
        <div>

            <SocialIcon
                key="linkedin"
                 style={styles.iconStyle}
                url="https://linkedin.com/"
                network="linkedin"
                // bgColor={theme.socialIconBgColor}
                target="_blank"
                rel="noopener"
            />

            <SocialIcon
                key="github"
                 style={styles.iconStyle}
                url="https://github.com/"
                network="github"
                // bgColor={theme.socialIconBgColor}
                target="_blank"
                rel="noopener"
            />

            <SocialIcon
                key="email"
                 style={styles.iconStyle}
                url="mailto:test@test.com"
                network="email"
                // bgColor={theme.socialIconBgColor}
                target="_blank"
                rel="noopener"
            />
        </div>
    )

}

export default Social;