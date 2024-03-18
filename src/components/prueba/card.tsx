import "./card.css";

export default function Card({
    imgSrc,
    spanTag,
}: any) {
    return (
        <div className="card container rounded-2xl my-0 mx-0 bg-white cursor-pointer	">
            <div className="card__header">
                <img src={imgSrc} alt="sample1" />
            </div>
            <div className="card__body">
                <span  className="card__body__date">
                    {spanTag}
                </span>
            </div>
        </div>
    );
}
