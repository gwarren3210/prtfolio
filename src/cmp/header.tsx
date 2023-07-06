import styles from '@/app/page.module.css'
import React from 'react';
import { IconType } from 'react-icons';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope, FaDiscord, } from 'react-icons/fa';
import socialMedia from '@/data/socialMedia.json';
import { SocialMediaLink } from '@/data/types';

const iconComponents: { [key: string]: IconType } = {
    FaLinkedin: FaLinkedin,
    FaGithub: FaGithub,
    FaTwitter: FaTwitter,
    FaInstagram: FaInstagram,
    FaEnvelope: FaEnvelope,
    FaDiscord: FaDiscord,
};

export default function Header() {
    return (
        <header>
            <nav className={styles.header}>
                <ul>
                    {socialMedia.map((link: SocialMediaLink, index: number) => {
                        const IconComponent = iconComponents[link.icon];
                        if (!IconComponent) return null;
                        return (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noreferrer">
                                    <IconComponent size={30}/>
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <p className={styles.desktopOnly}>check my resume for my number ; &#x29;, I reply faster to texts</p>
            </nav>
        </header>
    );
}
