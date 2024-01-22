import React from 'react';
import { Box, Typography } from '@mui/material';
import ExerciseCard from './ExcersiceCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const containerRef = React.useRef(null);

  const handleScrollLeft = () => {
    containerRef.current.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const handleScrollRight = () => {
    containerRef.current.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', padding: '20px' }}>
        <Typography onClick={handleScrollLeft}>
          <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
        <Typography onClick={handleScrollRight}>
          <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
        <div ref={containerRef} style={{ display: 'flex', flexWrap: 'nowrap' , overflowX:'auto'}}>
          {data.map((item, index) => (
            <Box
              key={index}
              itemID={index}
              title={item}
              sx={{ minWidth: '270px', flex: '0 0 auto' }}
            >
              {bodyParts ? (
                <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
              ) : (
                <ExerciseCard exercise={item} />
              )}
            </Box>
            
          ))}
          
        </div>
        
      </Box>
    </div>
  );
};

export default HorizontalScrollbar;
