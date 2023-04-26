import React from 'react'
import { useState } from "react";
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Statistic from './Statistics/Statistic';
import Notification from './Notification/Notification';
import Section from 'components/Section/Section'
import css from './App.module.css';

export function App(){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

      const onClickFunc = value => {
        switch (value) {
          case 'good':
            setGood(prevState => prevState + 1);
            break;
    
          case 'neutral':
            setNeutral(prevState => prevState + 1);
            break;
    
          case 'bad':
            setBad(prevState => prevState + 1);
            break;
    
          default:
            return;
        }
      }
      const countTotalFeedback =() =>{
        return good + neutral + bad;
      };
      const countPositiveFeedbackPercentage=() =>{
        return Math.round(good / countTotalFeedback() * 100)
      };

        const total = countTotalFeedback();
        const positivePercentage = countPositiveFeedbackPercentage();
        return (
          <div className={css.container}>
            <Section title="Please leave feedback">
            <FeedbackButtons options={['good', 'neutral', 'bad']} onLeaveFeedback={onClickFunc}/>
            <Section title="Statistics">
            {total ?(
              <Statistic 
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}/>
              ) :(
                <Notification message="There is no feedback" />
                )}
                </Section>
              </Section>

          </div>
        );


};
