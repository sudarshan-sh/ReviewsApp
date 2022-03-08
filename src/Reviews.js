import React, { useState } from 'react'
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = (number) => {
        if(number > people.length - 1){
            return 0;
        }
        if(number < 0){
            return people.length - 1;
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index)=> {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }
    const prevPerson = () => {
        setIndex((index)=> {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length - 1);
        if(randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

  return (
    <article className='review-article'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
                <FaQuoteRight />
            </span>
        </div>
        <h4 className='person-name'>{name}</h4>
        <p className='person-job'>{job}</p>
        <p className='person-text'>{text}</p>
        <div className='arrow-icon'>
            <button className='btn-arrow' onClick={prevPerson}>
                <FaChevronLeft />
            </button>
            <button className='btn-arrow' onClick={nextPerson}>
                <FaChevronRight />
            </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>surprise me</button>
    </article>
  )
}


export default Reviews;