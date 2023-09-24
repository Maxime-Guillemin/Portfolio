import React,{useContext} from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';

const styles = {
    iconStyle: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 15
    },
  };

function Social() {
    const theme = useContext(ThemeContext);

    const fgColor = theme.socialIconBgColor=== "#121212"? "#fefefe" : "#121212";
    return (
        
        <div>

            <SocialIcon
                key="linkedin"
                fgColor={fgColor}
                 style={styles.iconStyle}
                url="https://www.linkedin.com/in/maxime-guillemin-104370210/"
                network="linkedin"
                bgColor={theme.socialIconBgColor}
                target="_blank"
                rel="noopener"
            />

            <SocialIcon
                key="github"
                fgColor={fgColor}
                 style={styles.iconStyle}
                url="https://github.com/Maxime-Guillemin"
                network="github"
                bgColor={theme.socialIconBgColor}
                target="_blank"
                rel="noopener"
            />

            <SocialIcon
                key="email"
                fgColor={fgColor}
                 style={styles.iconStyle}
                url="mailto:max.guillemin@free.fr"
                network="email"
                bgColor={theme.socialIconBgColor}
                target="_blank"
                rel="noopener"
            />
        </div>
    )

}

export default Social;