import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/shaking-hands-in-front-of-house.jpg"
          alt="Partnering with Dallas Home Watch to watch your house while you are away."
          width={300}
          height={300}
        />
      </div>
    <h2>Home Watch Industry Articles</h2>
    </section>
  );
}

export default Hero;
