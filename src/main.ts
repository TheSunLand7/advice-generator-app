import axios from "axios";

/**### DOM ### */
const $numberOfAdvice = document.getElementById("advice-number") as HTMLSpanElement,
	$textAdvice = document.getElementById("advice-text") as HTMLHeadingElement,
	$dice = document.getElementById("dice-advice") as HTMLDivElement;

const API = "https://api.adviceslip.com/advice";
const fetchAdvice = async (api: string) => {
	const { data } = await axios.get(api);
	return data.slip;
};

const showAdvice = async () => {
	const advice = await fetchAdvice(API);
	$numberOfAdvice.textContent = `ADVICE #${advice.id}`;
	$textAdvice.textContent = `${advice.advice}`;
};

$dice.addEventListener("click", () => {
	showAdvice();
});
