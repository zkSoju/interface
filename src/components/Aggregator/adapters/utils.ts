export const redirectQuoteReq = async (
	protocol: string,
	chain: string,
	from: string,
	to: string,
	amount: string,
	extra: any
) => {
	const data = await fetch(
		`https://api.llama.fi/dexAggregatorQuote?protocol=${protocol}&chain=${chain}&from=${from}&to=${to}&amount=${amount}`,
		{
			method: 'POST',
			body: JSON.stringify(extra)
		}
	).then((res) => res.json());

	return data;
};