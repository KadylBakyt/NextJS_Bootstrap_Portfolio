import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from "./themeSwitcher.module.css";

const DarkTheme = () => {

    const [isDarkMode, setThemeMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme_mode") || "light";

        setThemeMode(currentTheme === 'dark' ? true : false);
        document.documentElement.setAttribute('data-bs-theme',currentTheme);
    },[])
    

    const handleInputChange = (e : any) => {
        if (e.target.type == 'checkbox' && e.target.checked){ 
            localStorage.setItem("theme_mode", 'dark');
            document.documentElement.setAttribute('data-bs-theme', "dark");
            setThemeMode(true);
        }else{
            localStorage.setItem("theme_mode", 'light');
            document.documentElement.setAttribute('data-bs-theme', 'light');
            setThemeMode(false);
        }
    }

    return (
        <div className={styles.dark_mode}>
            <input
                className={styles.dark_mode_input}
                type='checkbox'
                id='darkmode-toggle'
                onChange={handleInputChange}
                checked={ isDarkMode ?? 'checked' }
            />
            <label className={styles.dark_mode_label} htmlFor='darkmode-toggle'>
                <Image
                    className={styles.dark_mode_label_svg_sun}
                    priority
                    src="./sun.svg"
                    width={20}
                    height={20}
                    alt="Theme swicther"
                />
                
                <Image
                    className={styles.dark_mode_label_svg_moon}
                    priority
                    src="./moon.svg"
                    width={20}
                    height={20}
                    alt="Theme swicther"
                />
            </label>
        </div>
    );
};

export default DarkTheme;   