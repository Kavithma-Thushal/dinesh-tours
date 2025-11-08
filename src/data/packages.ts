export interface PackageType {
    id: number;
    name: string;
    days: string;
    price: string;
    image: string;
    description: string;
}

export const packages: PackageType[] = [
    {
        id: 1,
        name: "Kandy Tour",
        days: "3 Days / 2 Nights",
        price: "LKR 45,000",
        image: "/packages/kandy.jpg",
        description: "Explore the hill country’s tea plantations, waterfalls, and the Temple of the Tooth."
    },
    {
        id: 2,
        name: "Down South Beach Escape",
        days: "2 Days / 1 Night",
        price: "LKR 35,000",
        image: "/packages/galle.jpg",
        description: "Relax on golden beaches, visit Galle Fort, and enjoy sunset at Mirissa."
    },
    {
        id: 3,
        name: "Sigiriya & Dambulla Heritage Tour",
        days: "2 Days / 1 Night",
        price: "LKR 40,000",
        image: "/packages/sigiriya.jpg",
        description: "Climb the Lion Rock fortress and explore the ancient Dambulla Cave Temple."
    },
    {
        id: 4,
        name: "Ella & Haputale Adventure",
        days: "3 Days / 2 Nights",
        price: "LKR 50,000",
        image: "/packages/ella.jpg",
        description: "Take the scenic train, hike Little Adam’s Peak, and visit Lipton’s Seat."
    },
    {
        id: 5,
        name: "Mirissa Beach Getaway",
        days: "2 Days / 1 Night",
        price: "LKR 38,000",
        image: "/packages/mirissa.jpg",
        description: "Enjoy whale watching, beachside relaxation, and delicious seafood in beautiful Mirissa."
    },
    {
        id: 6,
        name: "Nuwara Eliya Highlands Tour",
        days: "3 Days / 2 Nights",
        price: "LKR 48,000",
        image: "/packages/nuwara-eliya.jpg",
        description: "Experience the ‘Little England’ of Sri Lanka — visit tea estates, Gregory Lake, and Hakgala Gardens."
    }
];