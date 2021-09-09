import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

interface VerticalProps{
  testimonial:{
    customerObject:{
      customerName:string,
      customerImage:{
        sourceUrl:string
      }
    },
    quote:string
  },
}

const VerticalFeatures = ({testimonial}:VerticalProps) => (
  <Section>
    <VerticalFeatureRow
      title={testimonial.customerObject?.customerName || "Your title here"}
      description={testimonial.quote || "Loading..."}
      image={testimonial.customerObject?.customerImage?.sourceUrl || "/assets/images/feature.svg"}
      imageAlt="Customer"
    />
  </Section>
);

export { VerticalFeatures };
