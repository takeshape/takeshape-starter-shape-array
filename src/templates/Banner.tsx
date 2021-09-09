import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

interface BannerProps{
  offer:{
    callToAction:string,
    signupUrl:string,
    campaignId?:string
  }
}

const Banner = ({offer}:BannerProps) => (
  <Section>
    <CTABanner
      title="Start your Free Trial."
      subtitle={
        offer.callToAction ||
        "Join now."
      }
      button={
        <Link href={offer.signupUrl || "/"}>
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
