import React from 'react'
import { useState } from "react";
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Statistic from './Statistics/Statistic';
import Notification from './Notification/Notification';
import Section from 'components/Section/Section'

export function App(){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(good,neutral,bad);

      const onClickFunc = value => {
        // console.log(good,neutral,bad);
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
        // switch(value){
        //   case 'good':
        //     setGood(value + 1)
        //     break;
        //     case 'neutral':
        //     setNeutral(prevNeutral => prevNeutral + 1)
        //     break;
        //     case 'bad':
        //     setBad(prevBad => prevBad + 1)
        //     break;
        //     default: 
        //     return;
        // }
      }
      const countTotalFeedback =() =>{
        return good + neutral + bad;
      };
      const countPositiveFeedbackPercentage=() =>{
        return Math.round(good / countTotalFeedback() * 100)
      };

        // const {good, neutral, bad} = this.state;
        const total = countTotalFeedback();
        const positivePercentage = countPositiveFeedbackPercentage();
        return (
          <div
            // style={{
            //   height: '100vh',
            //   display: 'flex',
            //   justifyContent: 'center',
            //   alignItems: 'center',
            //   fontSize: 40,
            //   color: '#010101'
            // }}
          >
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
