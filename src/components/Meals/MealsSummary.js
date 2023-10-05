import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Food Brought To You!</h2>
      <p>
        Spend less time driving and more time eating meals with your friends and
        family. Available for breakfast,lunch,dinner and late night!
      </p>
      <p>
        All food is cooked with high-quality ingredients by high-quality chefs
      </p>
    </section>
  );
};

export default MealsSummary;
