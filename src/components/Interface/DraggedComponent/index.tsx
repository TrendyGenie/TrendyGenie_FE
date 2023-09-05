'use client';
import React, { useState, FC } from 'react';
import Draggable from 'react-draggable';
import { Wrapper, DragIcon, Form, Input } from './styles';
import search from '../../../../public/svgs/search.svg';
import Image from 'next/image';

const DraggedComponent: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDrag = (e: any, ui: any) => {
    const { deltaY } = ui;

    // Adjust the threshold value to control sensitivity
    const threshold = 100;

    // Calculate the restricted bounds
    const topBound = window.innerHeight - 254;
    const bottomBound = 30; // 242px from the bottom

    if (deltaY < -threshold) {
      setIsExpanded(true);
    } else if (deltaY > threshold) {
      setIsExpanded(false);
    }

    // Ensure the panel stays within the bounds
    if (e.clientY < topBound) {
      e.clientY = topBound;
    } else if (e.clientY > bottomBound) {
      e.clientY = bottomBound;
    }
  };

  return (
    <Draggable
      axis="y"
      handle=".handle"
      onDrag={handleDrag}
      bounds={{ top: 30, bottom: window.innerHeight - 254 }}
    >
      <Wrapper className={`handle ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <DragIcon />
        <Form>
          <Image src={search} alt="Search" />
          <Input type="text" placeholder="Search for a place" />
        </Form>
        <div>
          {isExpanded ? 'Drag down to collapse' : 'Drag up for more details'}
        </div>
        {isExpanded && (
          <div className="details">
            {/* Add your additional content here */}
            <p>Additional Details Here</p>
          </div>
        )}
      </Wrapper>
    </Draggable>
  );
};

export default DraggedComponent;
