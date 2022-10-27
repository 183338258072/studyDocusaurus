import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  to: string
};

const FeatureList: FeatureItem[] = [
  {
    title: '博客',
    to: '/blog',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        记录了工作中遇到的问题和解决办法，当然也有没有解决的，先做记录，之后再来补充
      </>
    ),
  },
  {
    title: '学习',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    to: '/lifeblog',
    description: (
      <>
        一些新接触的东西，记录在这里
      </>
    ),
  },
  {
    title: '想法',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    to: '/product',
    description: (
      <>
        一些工作中的感悟吧，有时候突然之间就明白了很多东西，到时候记录一下
      </>
    ),
  },
];

function Feature({title, Svg, description,to}: FeatureItem) {
  return (

        <div className={clsx('col col--4',styles.hv)}>
      <div className={clsx('text--center')}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
      <Link to={to}>
        <h3>{title}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </div>


  );
}

export default function HomepageFeatures(): JSX.Element {
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
