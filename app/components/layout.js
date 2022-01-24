
const Layout = ({ children }) => {
    return (
        <div className="container mx-auto">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    {children} 
                </div>
            </div>
        </div>
    )
}

export default Layout