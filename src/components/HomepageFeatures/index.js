import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The fact remains that the apparent objective movement of capital—which is by no means a failure to recognize or an illusion of consciousness—shows that the productive essence of capitalism can itself function only in this necessarily monetary or commodity form that controls it, and whose flows and relations between flows contain the secret of the investment of desire. It is at the level of flows, the monetary flows included, and not at the level of ideology, that the integration of desire is achieved. So what is the solution? Which is the revolutionary path? Psychoanalysis is of little help, entertaining as it does the most intimate of relations with money, and recording—while refusing to recognize it—an entire system of economic-monetary dependences at the heart of the desire of every subject it treats. Psychoanalysis constitutes for its part a gigantic enterprise of absorption of surplus value. But which is the revolutionary path? Is there one?—To withdraw from the world market, as Samir Amin advises Third World countries to do, in a curious revival of the fascist "economic solution"? Or might it be to go in the opposite direction? To go still further, that is, in the movement of the market, of decoding and deterritorialization? For perhaps the flows are not yet deterritorialized enough, not decoded enough, from the viewpoint of a theory and a practice of a highly schizophrenic character. Not to withdraw from the process, but to go further, to "accelerate the process," as Nietzsche put it: in this matter, the truth is that we havent seen anything yet.',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        —Deleuze and Guattari, Anti-Oedipus
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
