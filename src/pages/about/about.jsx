import anual from "@/shared/images/Anual.png";
import emma from "@/shared/images/Emma Watson.png";
import will from "@/shared/images/Will Smith.png";
import sallers from "@/shared/images/Sallers.png";
import side from "@/shared/images/Side Image.png";
import tom from "@/shared/images/tom cruise.png";
import customer from "@/shared/images/Customer.png";
import socity from "@/shared/images/soc.png";
import security from "@/shared/images/security.png";
import headphones from "@/shared/images/headphones.png";
import services from "@/shared/images/Services.png";

const About = () => {
  return (
    <>
      <article className="w-[90%] md:max-w-[1200px] m-auto my-[70px] flex items-center gap-[12px]">
        <h3 className="text-[15px] font-semibold text-[gray]">Home</h3>
        <p className="text-[#00000080]">/</p>
        <h3 className="text-[15px] font-semibold">About</h3>
      </article>

      <section className="md:max-w-[1200px] w-[90%] my-[40px] max-md:gap-[20px] md:flex-row flex-col flex items-center justify-between m-auto">
        <article>
          <h1 className="text-[54px] font-semibold">Our Story</h1>
          <article className="text-[16px] mt-[40px] font-normal">
            <p className="mb-[24px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              <br className="hidden md:block" />
              makterplace with an active presense in Bangladesh. Supported
              <br className="hidden md:block" /> by wide range of tailored
              marketing, data and service solutions,{" "}
              <br className="hidden md:block" />
              Exclusive has 10,500 sallers and 300 brands and serves 3{" "}
              <br className="hidden md:block" />
              millioons customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              <br className="hidden md:block" />
              very fast. Exclusive offers a diverse assotment in categories
              <br className="hidden md:block" />
              ranging from consumer.
            </p>
          </article>
        </article>
        <img src={side} alt="hero" />
      </section>

      <section className="md:max-w-[1200px] my-[140px] flex items-center md:flex-row flex-col max-md:gap-[16px] justify-between w-[90%] m-auto">
        <article className="text-center md:w-[270px] h-[230px] w-full py-[30px] hover:shadow-[1px_1px_15px] hover:shadow-[#00000033] hover:border-0 transition-colors duration-300 hover:bg-[#DB4444] hover:text-[white] border-[#0000004D] border-[1px] rounded-[4px]">
          <img className="mb-[20px] m-auto" src={sallers} alt="sallers" />
          <h3 className="text-[32px] font-bold">10.5k</h3>
          <p className="text-[16px] font-normal">Sallers active our site</p>
        </article>
        <article className="text-center md:w-[270px] h-[230px] w-full py-[30px] hover:shadow-[1px_1px_15px] hover:shadow-[#00000033] hover:border-0 transition-colors duration-300 hover:bg-[#DB4444] hover:text-[white] border-[#0000004D] border-[1px] rounded-[4px]">
          <img className="mb-[20px] m-auto" src={anual} alt="anual" />
          <h3 className="text-[32px] font-bold">33k</h3>
          <p className="text-[16px] font-normal">Mopnthly Produduct Sale</p>
        </article>
        <article className="text-center md:w-[270px] h-[230px] w-full py-[30px] hover:shadow-[1px_1px_15px] hover:shadow-[#00000033] hover:border-0 transition-colors duration-300 hover:bg-[#DB4444] hover:text-[white] border-[#0000004D] border-[1px] rounded-[4px]">
          <img className="mb-[20px] m-auto" src={customer} alt="customer" />
          <h3 className="text-[32px] font-bold">45.5k</h3>
          <p className="text-[16px] font-normal">Customer active in our site</p>
        </article>
        <article className="text-center md:w-[270px] h-[230px] w-full py-[30px] hover:shadow-[1px_1px_15px] hover:shadow-[#00000033] hover:border-0 transition-colors duration-300 hover:bg-[#DB4444] hover:text-[white] border-[#0000004D] border-[1px] rounded-[4px]">
          <img className="mb-[20px] m-auto" src={anual} alt="anual" />
          <h3 className="text-[32px] font-bold">25k</h3>
          <p className="text-[16px] font-normal">
            Anual gross sale in our site
          </p>
        </article>
      </section>

      <section className="md:max-w-[1200px] my-[40px] flex items-center justify-between w-[90%] m-auto">
        <article className="w-[370px] h-[564px]">
          <img src={tom} alt="tom cruise" />
          <article className="my-[30px]">
            <h3 className="text-[32px] font-medium">Tom Cruise</h3>
            <p className="text-[16px] mb-[16px] font-normal">
              Founder & Chairman
            </p>
            <img src={socity} alt="socity" />
          </article>
        </article>
        <article className="w-[370px] hidden md:block h-[564px]">
          <img src={emma} alt="emma watson" />
          <article className="my-[30px]">
            <h3 className="text-[32px] font-medium">Emma Watson</h3>
            <p className="text-[16px] mb-[16px] font-normal">
              Managing Director
            </p>
            <img src={socity} alt="socity" />
          </article>
        </article>
        <article className="w-[370px] hidden md:block h-[564px]">
          <img src={will} alt="will smith" />
          <article className="my-[30px]">
            <h3 className="text-[32px] font-medium">Will Smith</h3>
            <p className="text-[16px] mb-[16px] font-normal">
              Product Designer
            </p>
            <img src={socity} alt="socity" />
          </article>
        </article>
      </section>

      <section className="w-[90%] md:max-w-[1200px] md:flex-row gap-[50px] flex-col flex items-center justify-between my-[100px] m-auto">
        <article className="text-center">
          <img src={services} alt="services" className="m-auto" />
          <h3 className="text-[20px] mt-[24px] font-semibold">
            FREE AND FAST DELIVERY
          </h3>
          <p className="text-[16px] font-normal">
            Free delivery for all orders over $140
          </p>
        </article>
        <article className="text-center">
          <img src={headphones} alt="services" className="m-auto" />
          <h3 className="text-[20px] mt-[24px] font-semibold">
            24/7 CUSTOMER SERVICE
          </h3>
          <p className="text-[16px] font-normal">
            Friendly 24/7 customer support
          </p>
        </article>
        <article className="text-center">
          <img src={security} alt="services" className="m-auto" />
          <h3 className="text-[20px] mt-[24px] font-semibold">
            MONEY BACK GUARANTEE
          </h3>
          <p className="text-[16px] font-normal">
            We reurn money within 30 days
          </p>
        </article>
      </section>
    </>
  );
};

export default About;
