import React from 'react';
import '../assets/css/Banner.css';

export type Link = {
    text: string;
    path: string;
}

type BannerProps = {
    items: Array<Link>;
}

class Banner extends React.Component<BannerProps> {
    render() {
        return (
            <div className='banner'>This is nothing for now</div>
        );
    }
}

export default Banner;