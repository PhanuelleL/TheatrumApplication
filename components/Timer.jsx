import { useEffect, useState } from 'react';

export default function Timer({ compte }) {
    const [decompte, setCompte] = useState(compte || 10);
    useEffect(() => {
        // Exécuté au chargement du composant dans la page
        const intervalID = setInterval(() => {
            if (decompte > 0) {
                setCompte(decompte - 1);
            } else {
                clearInterval(intervalID);
            }
        }, 1000);
        return () => {
            // Exécuté lorsque le composant est enlevé de la page
            clearInterval(intervalID);
        };
    });
    return <div>{decompte}</div>;
}