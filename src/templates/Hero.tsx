import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-[url('/assets/images/hero.jpg')] bg-cover">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'For you and for\n'}
            <span className="text-green-500">The Environment</span>
          </>
        }
        description="Hyru is an end to end circular solution that provides a complete plastic footprint evaluation of businesses in the food takeaway industry. It does that by developing a sustainable alternative while highlighting measurable impact."
        button={
          <Link href="/calculator">
            <a>
              <Button xl>Check Footprint</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
