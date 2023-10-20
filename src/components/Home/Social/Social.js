import React, { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';

import { motion } from "framer-motion"

import "./Social.css"

const styles = {
    iconStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 15,
    },
};

function Social() {
    const theme = useContext(ThemeContext);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const fgColor = theme.socialIconBgColor === "#121212" ? "#fefefe" : "#121212";
    return (

        <div>

            <motion.ul
                className="containerSocial"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                
                <motion.li className="item" variants={item}>

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
                </motion.li>

                <motion.li className="item" variants={item}>
                   
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
                </motion.li>

                <motion.li className="item" variants={item}>
                    
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
                </motion.li>
            </motion.ul>
        </div>
    )

}

export default Social;