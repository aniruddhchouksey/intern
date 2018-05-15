import React from 'react';
import Card from './Card';

const CardList = ({ albums }) => {
	return(
		<div className='flex flex-wrap justify-center'>
			{
				albums.map((user, i) => {
					return(
						<Card
							title={albums[i].title}
							artist={albums[i].artist}
							url={albums[i].url}
							image={albums[i].image}
							thumbnail_image={albums[i].thumbnail_image}
						/>
						);
				})	
			}
		</div>
		);
}

export default CardList
