import { company1, company2, company3 } from '../assets/images'
import Layout from '../layout/Layout'
// import { Background } from '../sections'
import AboutUsDetail from '../sections/AboutUsDetail'

const AboutUs = () => {
  return (
    <Layout>
      <section className=" xl:padding-1 wide:padding-r padding-b pt-24">
        {/* <Background /> */}
        <AboutUsDetail />
        <div className="flex justify-evenly gap-x-2">
          <div>
            <img src={company1} className="w-48" alt="image.png" />
          </div>
          <div>
            <img src={company2} className="w-48" alt="image.png" />
          </div>
          <div>
            <img src={company3} className="w-48" alt="image.png" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutUs
