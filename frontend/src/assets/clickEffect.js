import click from "/audio/click.mp3";

const effect = new Audio(click);

export const playClick = () => {
	effect.play();
};
