import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import Card from './Card';
import Navbar from './Navbar';
import './App.css';

const CardState = {
	HIDING: 0,
	SHOWING: 1,
	MATCHING: 2
};

class MemoryGame extends Component {
	constructor(props) {
		super(props);

		let cards = [
			{ id: 0, cardState: CardState.HIDING, backgroundColor: 'red' },
			{ id: 1, cardState: CardState.HIDING, backgroundColor: 'red' },
			{ id: 2, cardState: CardState.HIDING, backgroundColor: 'yellow' },
			{ id: 3, cardState: CardState.HIDING, backgroundColor: 'yellow' },
			{ id: 4, cardState: CardState.HIDING, backgroundColor: 'blue' },
			{ id: 5, cardState: CardState.HIDING, backgroundColor: 'blue' },
			{ id: 6, cardState: CardState.HIDING, backgroundColor: 'green' },
			{ id: 7, cardState: CardState.HIDING, backgroundColor: 'green' },
			{ id: 8, cardState: CardState.HIDING, backgroundColor: 'pink' },
			{ id: 9, cardState: CardState.HIDING, backgroundColor: 'pink' },
			{ id: 10, cardState: CardState.HIDING, backgroundColor: 'black' },
			{ id: 11, cardState: CardState.HIDING, backgroundColor: 'black' },
			{ id: 12, cardState: CardState.HIDING, backgroundColor: 'purple' },
			{ id: 13, cardState: CardState.HIDING, backgroundColor: 'purple' },
			{ id: 14, cardState: CardState.HIDING, backgroundColor: 'navy' },
			{ id: 15, cardState: CardState.HIDING, backgroundColor: 'navy' }
		];
		cards = shuffle(cards);
		this.state = {
			cards,
			noClick: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleNewGame = this.handleNewGame.bind(this);
	}

	handleClick(id) {
		const mapCardState = (cards, idsToChange, newCardState) => {
			return cards.map(c => {
				if (idsToChange.includes(c.id)) {
					return {
						...c,
						cardState: newCardState
					};
				}
				return c;
			});
		};

		const foundCard = this.state.cards.find(c => c.id === id);

		if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
			return;
		}

		let noClick = false;

		
	}

	handleNewGame() {
		// copy states and set all cardState to HIDING
		let cards = this.state.cards.map(c => ({
			...c,
			cardState: CardState.HIDING
		}));
		// shuffle cards and set as new state
		cards = shuffle(cards);
		this.setState({ cards });
	}

	render() {
		const cards = this.state.cards.map(card => (
			<Card
				key={card.id}
				showing={card.cardState !== CardState.HIDING}
				backgroundColor={card.backgroundColor}
				onClick={() => this.handleClick(card.id)}
			/>
		));

		return (
			<div>
				<Navbar onNewGame={this.handleNewGame} />
				{cards}
			</div>
		);
	}
}

export default MemoryGame;
