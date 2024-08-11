import { PaperRead } from "<prefix>/components/listOf";
import { getFeature } from "<prefix>/lib/contentful";
import { Features } from "<prefix>/type/feature";
import Wrapper from "<prefix>/components/wrapper";

export default async function MerchAndActs() {
    const fitur = await getFeature()
    return (
        <Wrapper>
            <p className="text-wrap mb-7 text-lg font-semibold text-gray-800 fade-in">Here&apos;s our Merch and Activities in our Organization</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    fitur.map((items: Features) => (
                        <div key={items.sys.id} className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <PaperRead
                                title={items.fields.title}
                                slug={items.fields.slug}
                                images={items.fields.images.fields.file.url}
                                category={items.fields.category}
                            />
                        </div>
                    ))
                }
            </div>
            <p className="mt-12 text-center text-sm font-medium text-gray-600 fade-in">You can get more if you wanna come to our Office</p>        </Wrapper>
    )
}