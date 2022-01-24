import { useState } from 'react'; 
import { useRouter } from 'next/router';

const bodyData = {
    products:[
    {
        amount: 2,
        id: 1,
        name: "Metalcon C 100x40x12x0.85 tira 6m",
        price: "16329",
        urlImage: "https://sodimac.scene7.com/is/image/SodimacCL/24155?fmt=jpg" 
    },
    {
        amount: 1,
        id: 2,
        name: "Metalcon C 150x40x12x0.85 tira 6m",
        price: "18659",
        urlImage: "https://sodimac.scene7.com/is/image/SodimacCL/396761_01?fmt=jpg"
    },
    {
        amount: 3,
        id: 3,
        name: "Metalcon C 150x40x12x0.85 tira 6m",
        price: "18659",
        urlImage: "https://sodimac.scene7.com/is/image/SodimacCL/396761_01?fmt=jpg"
    }
]
}


export const getStaticProps = async () => {

    const response = await fetch('http://localhost:3001/products')
    const data = await response.json();

    return {
        props: { products: data }
    }
}

const Product = ({ products }) => {

    const [amount, setAmount] = useState(0);

    const createOrder = async () => {
        const response = await fetch('http://localhost:3001/orders', {
            method: 'POST',
            body: JSON.stringify(bodyData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // const router = useRouter();
        // router.push('/tracking')
        window.location.href = '/tracking'
    }

    return (
        <><div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h1>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.Id} className="group relative">
                            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                <img
                                    src={product.UrlImage}
                                    alt={product.Name}
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.Name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.Name}</p>
                                    <div className="custom-number-input h-10 w-32">
                                        <label for="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">
                                        </label>
                                        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                            <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" onClick={() => setAmount(amount - 1)}>
                                                <span className="m-auto text-2xl font-thin">−</span>
                                            </button>
                                            <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={amount}></input>
                                            <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={() => setAmount(amount + 1)}>
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.Price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={createOrder}>
                Crear pedido
              </button>
            </div>
        </>
        
    )
}

export default Product