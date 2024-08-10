import { PaperRead } from "<prefix>/components/listOf";
import { getFeature } from "<prefix>/lib/contentful";
import { Features } from "<prefix>/type/feature";
import Wrapper from "<prefix>/components/wrapper";

export default async function MerchAndActs() {
    const fitur = await getFeature()
    return (
        <Wrapper>
            <p className="text-wrap mb-7">Here's our Merch and Activities in our Organization</p>
            <div className="grid grid-cols-3 gap-4">
                {
                    fitur.map((items: Features) => {
                        return (
                            <PaperRead
                                key={items.sys.id}
                                title={items.fields.title}
                                slug={items.fields.slug}
                                images={items.fields.images.fields.file.url}
                                category={items.fields.category}
                            />
                        )
                    })
                }
            </div>
            <p className="mt-12">You can get more if you wanna come to our Office</p>
        </Wrapper>
    )
}