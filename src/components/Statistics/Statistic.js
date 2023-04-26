import propTypes from 'prop-types';
import css from './Statistics.module.css'
export default function Statistic({good, neutral, bad, total, positivePercentage}){
return <>
<ul className={css.list}>
    <li className={css.item}>Good: {good}</li>
    <li className={css.item}>Neutral: {neutral}</li>
    <li className={css.item}>Bad: {bad}</li>
    <li className={css.item}>Total: {total}</li>
    <li className={css.item}>Positive feedback: {positivePercentage}%</li>
</ul>
</>
}
Statistic.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired,
}