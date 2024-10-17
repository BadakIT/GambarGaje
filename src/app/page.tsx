import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
// import { Cta } from "@/components/Cta";

import { benefitOne } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Gambar Gaje Benefits"
        title="why does it have to be a Gambar Gaje"
      >
        in Gambar_gaje you can vectorize your face, you can also make crafts
        from the vectorized results such as commemorative photos, bouquets,
        gifts, etc.
      </SectionTitle>

      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={} /> */}

      <SectionTitle
        preTitle="Watch a video"
        title="This is Video Process"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="J7NB-inBVC8" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        This is a testimonial from a customer of gambar_gaje who has ordered
        vector images
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        You may want to ask questions like the ones below. We summarize the
        questions that customers often ask to improve convenience.
      </SectionTitle>

      <Faq />
    </Container>
  );
}
