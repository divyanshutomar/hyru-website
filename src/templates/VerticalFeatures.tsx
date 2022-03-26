import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section>
    <VerticalFeatureRow
      title="What?"
      description="Hyru containers are made from the fallen leaves of the Areca Palm tree. These leaves are sun-dried and heat pressed into containers."
      image="/assets/images/leaf.png"
      imageAlt="Hyru containers"
    />
    <VerticalFeatureRow
      title="Close to nature"
      description="No chemicals, no bonding agents, No lacquers or sealants used. Each plate is hand-pressed from a single leaf. The leaves have a wood-like appearance, providing a touch of Nature to every dish they are used for."
      image="/assets/images/nature.png"
      imageAlt="Close to nature"
      reverse
    />
    <VerticalFeatureRow
      title="It's so good"
      description="The containers are also 100% biodegradable, disposable, and spill-proof making them perfect for indoor or outdoor events. The material does not react with food. All manner of wet/hot/cold foods can be served."
      image="/assets/images/recycle.png"
      imageAlt="Container features"
    />
  </Section>
);

export { VerticalFeatures };
