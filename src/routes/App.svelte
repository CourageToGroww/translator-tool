<script>
	import SimpleCarousel from '../lib/SimpleCarousel.svelte';
	import 'uno.css';

	let text = '';
	let translation = '';
	let responseData = null;
	let googleSearchUrl = null;
	let duckduckGoSearchUrl = null;
	let youComSearchUrl = null;
	const openAIKey = import.meta.env.VITE_OPENAI_API_KEY;

	//____________________________________________TRANSLATE FUNCTIONS_____________________MOVE TO ANOTHER FILE
	async function translateTextThai() {
		const response = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${openAIKey}`
			},
			body: JSON.stringify({
				model: 'gpt-4',
				messages: [
					{
						role: 'system',
						content:
							'You are a fluent Thai and English speaker. When I send you something in English, I want you to translate it to Thai. If I send you any other language just give me the English translation.'
					},
					{
						role: 'user',
						content: text
					}
				],
				max_tokens: 1200
			})
		});

		if (response.ok) {
			const data = await response.json();
			translation = data['choices'][0]['message']['content'];
			responseData = data; // store the response data
			// Create a Google Search URL with the response data as the query
			googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(translation);
			duckduckGoSearchUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(translation);
			youComSearchUrl = 'https://you.com/search?q=' + encodeURIComponent(translation);
		} else {
			console.error('Error:', response.status, response.statusText);
		}
	}

	async function translateTextJapanese() {
		const response = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${openAIKey}`
			},
			body: JSON.stringify({
				model: 'gpt-4',
				messages: [
					{
						role: 'system',
						content:
							'You are a fluent Japanese and English speaker. When I send you something in English, I want you to translate it to Japanese. If I send you any other language just give me the English translation.'
					},
					{
						role: 'user',
						content: text
					}
				],
				max_tokens: 1200
			})
		});
		if (response.ok) {
			const data = await response.json();
			translation = data['choices'][0]['message']['content'];
			responseData = data; // store the response data
			// Create a Google Search URL with the response data as the query
			googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(translation);
			duckduckGoSearchUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(translation);
			youComSearchUrl = 'https://you.com/search?q=' + encodeURIComponent(translation);
		} else {
			console.error('Error:', response.status, response.statusText);
		}
	}

	async function translateTextChinese() {
		const response = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${openAIKey}`
			},
			body: JSON.stringify({
				model: 'gpt-4',
				messages: [
					{
						role: 'system',
						content:
							'You are a fluent Mandarin Chinese and English speaker. When I send you something in English, I want you to translate it to Mandarin Chinese. If I send you any other language just give me the English translation.'
					},
					{
						role: 'user',
						content: text
					}
				],
				max_tokens: 1200
			})
		});

		if (response.ok) {
			const data = await response.json();
			translation = data['choices'][0]['message']['content'];
			responseData = data; // store the response data
			// Create a Google Search URL with the response data as the query
			googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(translation);
			duckduckGoSearchUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(translation);
			youComSearchUrl = 'https://you.com/search?q=' + encodeURIComponent(translation);
		} else {
			console.error('Error:', response.status, response.statusText);
		}
	}

	//____________________________________________CLOUD FUNCTIONS FUNCTIONS_____________________MOVE TO ANOTHER FILE
</script>

<main class="relative z-20 glass-effect py-10 min-h-screen">
	<div class=" glass-effect text-center text-gray-100 rounded p-10 rounded mx-auto my-auto w-1/2">
		Prompt ReQuest

		<div class=" glass-effect rounded w-200 h-120 ml-20">
			<p class="text-center pt-50 text-2xl">{translation}</p>
		</div>

		<p class="text-center ps-font mt-15">Languages</p>
		<button
			type="submit"
			on:click={() => translateTextThai('Thai')}
			class="btn-glass-effect py-2 px-4 rounded transition"
		>
			<img
				src="https://flagcdn.com/40x30/th.png"
				srcset="https://flagcdn.com/80x60/th.png 2x, https://flagcdn.com/120x90/th.png 3x"
				width="20"
				height="15"
				alt="Thailand"
			/>
		</button>
		<button
			type="button"
			on:click={() => translateTextJapanese('Japanese')}
			class="btn-glass-effect py-2 px-4 rounded transition"
		>
			<img
				src="https://flagcdn.com/40x30/jp.png"
				srcset="https://flagcdn.com/80x60/jp.png 2x, https://flagcdn.com/120x90/jp.png 3x"
				width="20"
				height="15"
				alt="Japan"
			/>
		</button>
		<button
			type="submit"
			on:click={() => translateTextChinese('Chinese')}
			class=" btn-glass-effect py-2 px-4 rounded transition"
		>
			<img
				src="https://flagcdn.com/40x30/cn.png"
				srcset="https://flagcdn.com/80x60/cn.png 2x, https://flagcdn.com/120x90/cn.png 3x"
				width="20"
				height="15"
				alt="China"
			/>
		</button>
		<form class="mt-5">
			<div class="mb-10">
				<input
					id="text-input"
					bind:value={text}
					placeholder="Enter Text Here"
					class="w-full text-center p-2 border glass-effect w rounded text-gray-400 mb-3"
				/>
			</div>
		</form>
		<div class="button-container">
			<div class="left-buttons-panel pt-5 mb-20">
				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 2x, https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 3x"
						width="20"
						height="15"
						alt="Microsoft Azure"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 2x, https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 3x"
						width="20"
						height="15"
						alt="AWS"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://www.svgrepo.com/show/448223/gcp.svg"
						srcset="https://www.svgrepo.com/show/448223/gcp.svg 2x, https://www.svgrepo.com/show/448223/gcp.svg"
						width="20"
						height="15"
						alt="GCP"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 2x, https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 3x"
						width="20"
						height="15"
						alt="Microsoft Azure"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 2x, https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 3x"
						width="20"
						height="15"
						alt="AWS"
					/>
				</button>
				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://www.svgrepo.com/show/448223/gcp.svg"
						srcset="https://www.svgrepo.com/show/448223/gcp.svg 2x, https://www.svgrepo.com/show/448223/gcp.svg"
						width="20"
						height="15"
						alt="GCP"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 2x, https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 3x"
						width="20"
						height="15"
						alt="Microsoft Azure"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 2x, https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 3x"
						width="20"
						height="15"
						alt="AWS"
					/>
				</button>
				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://www.svgrepo.com/show/448223/gcp.svg"
						srcset="https://www.svgrepo.com/show/448223/gcp.svg 2x, https://www.svgrepo.com/show/448223/gcp.svg"
						width="20"
						height="15"
						alt="GCP"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 2x, https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 3x"
						width="20"
						height="15"
						alt="Microsoft Azure"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 2x, https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 3x"
						width="20"
						height="15"
						alt="AWS"
					/>
				</button>
				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://www.svgrepo.com/show/448223/gcp.svg"
						srcset="https://www.svgrepo.com/show/448223/gcp.svg 2x, https://www.svgrepo.com/show/448223/gcp.svg"
						width="20"
						height="15"
						alt="GCP"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 2x, https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 3x"
						width="20"
						height="15"
						alt="Microsoft Azure"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 2x, https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 3x"
						width="20"
						height="15"
						alt="AWS"
					/>
				</button>
				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://www.svgrepo.com/show/448223/gcp.svg"
						srcset="https://www.svgrepo.com/show/448223/gcp.svg 2x, https://www.svgrepo.com/show/448223/gcp.svg"
						width="20"
						height="15"
						alt="GCP"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 2x, https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 3x"
						width="20"
						height="15"
						alt="Microsoft Azure"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 2x, https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 3x"
						width="20"
						height="15"
						alt="AWS"
					/>
				</button>
				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://www.svgrepo.com/show/448223/gcp.svg"
						srcset="https://www.svgrepo.com/show/448223/gcp.svg 2x, https://www.svgrepo.com/show/448223/gcp.svg"
						width="20"
						height="15"
						alt="GCP"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 2x, https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 3x"
						width="20"
						height="15"
						alt="Microsoft Azure"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 2x, https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 3x"
						width="20"
						height="15"
						alt="AWS"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://www.svgrepo.com/show/448223/gcp.svg"
						srcset="https://www.svgrepo.com/show/448223/gcp.svg 2x, https://www.svgrepo.com/show/448223/gcp.svg"
						width="20"
						height="15"
						alt="GCP"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 2x, https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 3x"
						width="20"
						height="15"
						alt="Microsoft Azure"
					/>
				</button>
				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 2x, https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 3x"
						width="20"
						height="15"
						alt="AWS"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://www.svgrepo.com/show/448223/gcp.svg"
						srcset="https://www.svgrepo.com/show/448223/gcp.svg 2x, https://www.svgrepo.com/show/448223/gcp.svg"
						width="20"
						height="15"
						alt="GCP"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 2x, https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 3x"
						width="20"
						height="15"
						alt="Microsoft Azure"
					/>
				</button>
				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 2x, https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 3x"
						width="20"
						height="15"
						alt="AWS"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://www.svgrepo.com/show/448223/gcp.svg"
						srcset="https://www.svgrepo.com/show/448223/gcp.svg 2x, https://www.svgrepo.com/show/448223/gcp.svg"
						width="20"
						height="15"
						alt="GCP"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 2x, https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg 3x"
						width="20"
						height="15"
						alt="Microsoft Azure"
					/>
				</button>
				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
						srcset="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 2x, https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg 3x"
						width="20"
						height="15"
						alt="AWS"
					/>
				</button>

				<button class="btn-glass-effect py-2 px-4 rounded transition">
					<img
						src="https://www.svgrepo.com/show/448223/gcp.svg"
						srcset="https://www.svgrepo.com/show/448223/gcp.svg 2x, https://www.svgrepo.com/show/448223/gcp.svg"
						width="20"
						height="15"
						alt="GCP"
					/>
				</button>
			</div>
			{#if responseData}
				<div class="buttons-panel rounded">
					<button
						onclick="window.open('{googleSearchUrl}', '_blank')"
						class=" btn-glass-effect py-2 px-4 rounded transition"
					>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
							alt="Google Logo"
							width="20"
							height="15"
						/>
					</button>
					<button
						onclick="window.open('{duckduckGoSearchUrl}', '_blank')"
						class="btn-glass-effect py-2 px-4 rounded transition"
					>
						<img
							src="https://handwiki.org/wiki/images/8/88/DuckDuckGo_logo.svg"
							alt="DuckDuckGo Logo"
							width="20"
							height="15"
						/>
					</button>
					<button
						onclick="window.open('{youComSearchUrl}', '_blank')"
						class="btn-glass-effect py-2 px-4 rounded transitiont"
					>
						<img
							src="https://you.com/images/ydc-logo-lightdarkmode.svg"
							alt="You.com Logo"
							width="20"
							height="15"
						/>
					</button>
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
				</div>
				<div class="buttons-panel">
					<button class="btn-glass-effect py-2 px-4 rounded transition">
						<img
							src="https://you.com/images/ydc-logo-lightdarkmode.svg"
							alt="You.com Logo"
							width="20"
							height="15"
						/>
					</button>
					<button class="btn-glass-effect py-2 px-4 rounded transition">
						<img
							src="https://you.com/images/ydc-logo-lightdarkmode.svg"
							alt="You.com Logo"
							width="20"
							height="15"
						/>
					</button>
					<button class="btn-glass-effect py-2 px-4 rounded transition">
						<img
							src="https://you.com/images/ydc-logo-lightdarkmode.svg"
							alt="You.com Logo"
							width="20"
							height="15"
						/>
					</button>
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
					<button class="btn-glass-effect py-2 px-4 rounded transition" />
				</div>
			{/if}
			<div class="right-buttons-panel rounded pt-5">
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
				<button class="btn-glass-effect py-2 px-4 rounded transition" />
			</div>
		</div>
	</div>
</main>

<style>
	.button-container {
		display: flex;
		justify-content: space-between;
	}
	.glass-effect {
		font-family: 'Press Start 2P', cursive;
	}

	.left-buttons-panel,
	.buttons-panel,
	.right-buttons-panel {
		display: grid;
		grid-template-columns: repeat(3, 3fr); /* change 3 to the number of columns you want */
		gap: 10px;
	}

	.ps-font {
		font-family: 'Press Start 2P', cursive;
	}
</style>
