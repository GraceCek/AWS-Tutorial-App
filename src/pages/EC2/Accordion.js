import React, { useState } from 'react';
import { Data } from './AccordionData';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

const Container = styled.div`
  position: absolute;
  top: 2%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: lightgrey;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1.5rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: white;
  color: black;
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  p {
    padding: 2rem;
    font-size: 1.5rem;
  }
`;

const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <IconContext.Provider value={{ color: 'black', size: '25px' }}>
            <AccordionSection>
                <Container>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h1>{item.type}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.description}</p>
                                    </Dropdown>
                                ) : null}
                            </>
                        );
                    })}
                </Container>
            </AccordionSection>
        </IconContext.Provider>
    );
};

export default Accordion;