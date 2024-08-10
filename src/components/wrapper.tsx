import { ReactNode } from "react"

function Wrapper({ children }: { children: ReactNode }) {
    return (
        <div className="bg-indigo-700 pt-20"> {/* Added pt-20 to offset the fixed navbar height */}
            <div className="max-w-full sm:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                {children}
            </div>
        </div>
    )
}

export default Wrapper