
import { object } from 'motion/react-client';
import { ICar } from '../types';

const FormatData = (car: ICar) => {
    // nesne içerisindeki ekrana basılacak olan alanları belirle 

    const accepted = [
        "make",
        "model",
        "cylinders",
        "drive",
        "fueltype",
        "trany",
        "vclass",
        "year",
        "tcharger",
        "startstop",
        "co2",
        "displ",
        "atvtype",
    ];

    //nesneyi diziye çevirip ardından filtreleme yaptık
    const arr = Object.entries(car).filter((i) => accepted.includes(i[0]));

    // diziyi dönder
    return arr;
};

export default FormatData
