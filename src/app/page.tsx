import CardAnimal from "@/components/animal/CardAnimal";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/prueba/card";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <Card
                        imgSrc="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                    <Card
                        imgSrc="data:image/jpeg;base64,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"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                    <Card
                        imgSrc="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                    <Card
                        imgSrc="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                    <Card
                        imgSrc="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                    <Card
                        imgSrc="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                    <Card
                        imgSrc="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                    <Card
                        imgSrc="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                    <Card
                        imgSrc="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                    <Card
                        imgSrc="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                    <Card
                        imgSrc="https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680"
                        spanTag="4 Day ago"
                        constentHead="Post One"
                        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
                        reads="3224"
                        views="7"
                        comment="21"
                        color="rgb(248, 51, 84)"
                    />
                </div>
            </main>
        </>
    );
}
