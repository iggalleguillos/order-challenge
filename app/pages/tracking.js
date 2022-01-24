
export const getStaticProps = async () => {

    const response = await fetch('http://localhost:3001/orders/1')
    const data = await response.json();

    return {
        props: { order: data }
    }
}

const Tracking = ({order}) => {

    return (
        <><div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Seguimiento</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Estatus</p>
            </div>
            {order.status.map((status) => (
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Estado</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{status.name}</dd>
                        </div>
                    </dl>
                </div>
            ))}
        </div>
        <br></br>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Lista de productos</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
                </div>
                {order.products.map((product) => (
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Estado</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{product.name}</dd>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">cantidad: {product.amount}</dd>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">valor: {product.price}</dd>
                            </div>
                        </dl>
                    </div>
                ))}
            </div></>
    )
}

export default Tracking