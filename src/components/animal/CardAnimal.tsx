import { PropsCardAnimal } from "./animal.inteface";

function CardAnimal({ urlImagenAnimal, nombreAnimal }: Readonly<PropsCardAnimal>) {
    return (
        <div className="max-w-60 max-w-xl rounded-xl overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={urlImagenAnimal} alt={nombreAnimal} />
            <div className="text-center">
                <div className="font-bold text-xl text-black">{nombreAnimal}</div>
            </div>
        </div>
    );
}

export default CardAnimal;
