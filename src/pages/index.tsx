import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import formarLogo from '../../public/formarLogo.svg';
import house1Image from '../../public/house1.png';
import house2Image from '../../public/house2.png';

const inter = Inter({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

const benefits: { title: string; description: string }[] = [
  {
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet  amet lorem ipsum sit',
  },
  {
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet  amet lorem ipsum sit',
  },
  {
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet  amet lorem ipsum sit',
  },
];

const houses: { image: StaticImageData; title: string; description: string }[] = [
  {
    image: house1Image,
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet  amet lorem ipsum sit',
  },
  {
    image: house2Image,
    title: 'Lorem ipsum',
    description:
      'Lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet  amet lorem ipsum sit',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Formar Contruções</title>
        <meta name="description" content="Construção de alto padrão" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <Image src={formarLogo} alt="Formar Construção" height={28} />
          <button className={`${styles.btnCallToAction} + ${styles.grey}`}>Lorem ipsum</button>
        </div>
        <div className={styles.content}>
          <section className={styles.heroSection}>
            <div className={styles.heroSectionContent}>
              <h6>LOREM IPSUM</h6>
              <h1>Lorem ipsum sit dolor amet lorem ipsum</h1>
              <p>
                Lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum
                sit dolor amet lorem ipsum sit dolor{' '}
              </p>
              <button className={styles.btnCallToAction}>Lorem ipsum</button>
            </div>
          </section>
          <section className={styles.benefitsSection}>
            <h2>Lorem ipsum sit dolor amet</h2>
            <div className={styles.benefitCards}>
              {benefits.map((benefit) => {
                return (
                  <div key={benefit.title}>
                    <div>
                      <span className={styles.circle}></span>
                      <h5>{benefit.title}</h5>
                    </div>
                    <p>{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
          <section className={styles.portfolioSection}>
            <div className={styles.portfolioSectionContent}>
              <h2>Lorem ipsum</h2>
              <p>Lorem ipsum sit dolor amet lorem ipsum sit dolor amet lorem ipsum sit dolor amet</p>
            </div>
            <ul className={styles.housesList}>
              {houses.map((house) => {
                return (
                  <li key={house.title}>
                    <Image src={house.image} alt={house.title} />
                    <h5>{house.title}</h5>
                    <p>{house.description}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
