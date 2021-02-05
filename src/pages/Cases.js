import Banner from "../components/Banner"
import Footer from "../components/Footer"
import { dadosCases } from "../data"

const Cases = (data) => {
    return (
        <>
            <Banner data={dadosCases} />
            <Footer />
        </>
    )
}

export default Cases