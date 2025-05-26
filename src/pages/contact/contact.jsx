import phone from "@/shared/images/icons-phone.png";
import email from "@/shared/images/icons-mail.png";
import { Button } from "@/features/components/ui/button";
import { Input } from "@/features/components/ui/input";
import { Textarea } from "@/features/components/ui/textarea";

const Contact = () => {
  return (
    <>
      <article className="w-[90%] md:max-w-[1200px] m-auto my-[70px] flex items-center gap-[12px]">
        <h3 className="text-[15px] font-semibold text-[gray]">Home</h3>
        <p className="text-[#00000080]">/</p>
        <h3 className="text-[15px] font-semibold">Contact</h3>
      </article>

      <section className="w-[90%] flex md:flex-row gap-[40px] flex-col justify-between md:max-w-[1200px] mb-[200px] m-auto">
        <article className="w-[350px] h-[434px] p-[40px] shadow-[0px_5px_15px] shadow-[#00000029]">
          <article className="flex mb-[20px] items-center gap-[16px]">
            <img src={phone} alt="phone" />
            <h3 className="text-[20px] font-semibold">Call To Us</h3>
          </article>
          <p>We are available 24/7, 7 days a week. Phone: +8801611112222</p>
          <hr className="my-[32px] border-[1px] border-[#0000002c]" />
          <article>
            <article className="flex mb-[20px] items-center gap-[16px]">
              <img src={email} alt="email" />
              <h3 className="text-[20px] font-semibold">Write To US</h3>
            </article>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p className="my-[12px]">Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </article>
        </article>
        <article className="md:w-[780px] py-[20px] px-[16px] md:p-[40px] shadow-[0px_5px_15px] shadow-[#00000029]">
          <article className="flex md:flex-row gap-[20px] flex-col items-center justify-between">
            <Input
              className="w-full md:w-[220px] h-[56px] text-[#00000099] text-[16px]"
              placeholder="Name"
            />
            <Input
              className="w-full md:w-[220px] h-[56px] text-[#00000099] text-[16px]"
              placeholder="Email"
            />
            <Input
              className="w-full md:w-[220px] h-[56px] text-[#00000099] text-[16px]"
              placeholder="Phone"
            />
          </article>
          <Textarea
            placeholder="Your Massage"
            className="h-[176px] my-[32px] text-[#00000099] text-[16px]"
          />
          <article className="flex items-center justify-end">
            <Button className="w-[167px] h-[44px] md:w-[215px] md:h-[56px] bg-[#DB4444]">
              Send Massage
            </Button>
          </article>
        </article>
      </section>
    </>
  );
};

export default Contact;
