import React from 'react';

type Props = {
    title: string
    onClick: () => void
}

export const CustomButton = ({title, onClick}: Props) => {
    return (
        <div>
            <button onClick={onClick}>{title}</button>
        </div>
    );
};

