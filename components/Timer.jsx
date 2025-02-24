"use client"
import { useEffect, useState } from 'react';

export default function Timer({ targetDate }) {
    // État pour stocker le temps restant
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Fonction pour calculer le temps restant
    function calculateTimeLeft() {
        const now = new Date(); // Date actuelle
        const difference = new Date(targetDate) - now; // Différence en millisecondes

        // Calcul des jours, heures, minutes et secondes restants
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        // Mettre à jour le décompte toutes les secondes
        const intervalID = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Nettoyer l'intervalle lors du démontage du composant
        return () => clearInterval(intervalID);
    }, [targetDate]); // Déclencher useEffect si targetDate change

    return (
        <div>
            <h1 className='text-3xl font-semibold text-yellow-400'>{timeLeft.days} jr : {timeLeft.hours} hr : {timeLeft.minutes} min : {timeLeft.seconds} sec</h1>
        </div>
    );
}