import { UtensilsCrossed, Truck, Cake } from 'lucide-react';
import { bakeryServices } from '../data/bakeryData';

export function useServices() {
    const iconMap = {
        UtensilsCrossed: UtensilsCrossed,
        Truck: Truck,
        Cake: Cake,
    };

    return {
        bakeryServices,
        iconMap,
    };
}