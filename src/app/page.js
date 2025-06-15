// "use client";
import { Button } from "flowbite-react";
import Image from "next/image";
import { getAllProductAction } from "./actions/services/productAPI";
import Link from "next/link";
import { isValidImage } from "./utils/utils";
// import { useEffect, useState } from "react";

const getAllProduct = async () => {
    const res = await fetch("http://localhost:3000/api/product");
    const data = await res.json();

    return data.content;
};

export default async function Home() {
    // const data = await getAllProduct();
    const data = await getAllProductAction();

    console.log("data: ", data);

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-red-500 text-5xl mb-4">Shoe shop</h1>

            <div className="grid grid-cols-3 gap-2">
                {data?.map((item) => {

                   const imageURL = item.image.trimEnd();

                    const isValidUrl = isValidImage(imageURL);

                    return (
                        <div key={item.id} className="border border-amber-800 P-4">
                            <Image
                                src={item.image}
                                width={200}
                                height={200}
                                quality={100}
                                alt={item.name}
                                className="w-full"
                            />

                            <h2 className="text-green-500 text-2xl mt-2">
                                {item.name}
                            </h2>
                            <p className="text-3xl text-red-500 mt-2">
                                {item.price}$
                            </p>

                            <Link
                                href={`/detail/${item.id}`}
                                className="bg-green-500 p-3 block"
                            >
                                Go to detail
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// use client không dùng cho các trường hợp cần SEO
// script gọi data thực hiện tại client, không hỗ trợ SEO được
// export default function Home() {
//     const [arrProduct, setArrProduct] = useState([]);

//     const getAllProduct = async () => {
//         const res = await fetch("/api/product");
//         const data = await res.json();
//         console.log("data: ", data);
//         setArrProduct(data.content);
//     };

//     useEffect(() => {
//         getAllProduct();
//     }, []);

//     return (
//         <div className="container mx-auto">
//             <h1 className="text-center text-red-500">Shoe shop</h1>

//             <div className="grid grid-cols-3 gap-2">
//                 {arrProduct?.map((item) => {
//                     return (
//                         <div key={item.id} className="border border-amber-800">
//                             <Image
//                                 src={item.image}
//                                 width={200}
//                                 height={200}
//                                 quality={100}
//                                 alt={item.name}
//                             />

//                             <p>{item.name}</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default function Home() {
//     return (
//         <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-roboto)]">
//             <h1>Hello cybersoft !</h1>

//             <Image
//                 src={
//                     "https://apistore.cybersoft.edu.vn/images/vans-black-black.png"
//                 }
//                 width={200}
//                 height={200}
//                 quality={100}
//                 alt=""
//             />
//             <Button>Click me !</Button>
//         </div>
//     );
// }
