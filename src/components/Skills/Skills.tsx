import { useState, useEffect } from 'react';
import { SkillsProps } from './Skills.type';

export const Skills = (props: SkillsProps) => {
    const { skills } = props;
    const [isloggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setTimeout(() => setIsLoggedIn(true), 1500);
    }, []);
    return (
        <>
            <ul>
                {skills.map((skill) => {
                    return <li key={skill}>{skill}</li>;
                })}
            </ul>
            {isloggedIn ? (
                <button>Start learning</button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}
        </>
    );
};
