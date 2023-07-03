<script>
    import 'uno.css'
    let text = '';
    let translation = '';
    let responseData = null; // to store the response data
    let googleSearchUrl = null; 
    let duckduckGoSearchUrl = null; 
    let youComSearchUrl = null;
    const openAIKey = import.meta.env.VITE_OPENAI_API_KEY; 

    async function translateTextThai() {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openAIKey}`
        },
        body: JSON.stringify({
          'model': 'gpt-4',
          'messages': [
            {
              'role': 'system',
              'content': "You are a fluent Thai and English speaker. When I send you something in English, I want you to translate it to Thai. If I send you any other language just give me the English translation."
            },
            {
              'role': 'user',
              'content': text
            }
          ],
          'max_tokens': 1200
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
  };

  async function translateTextJapanese() {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openAIKey}`
                },
                body: JSON.stringify({
                    'model': 'gpt-4',
                    'messages': [
                        {
                            'role': 'system',
                            'content': "You are a fluent Japanese and English speaker. When I send you something in English, I want you to translate it to Japanese. If I send you any other language just give me the English translation."
                        },
                        {
                            'role': 'user',
                            'content': text
                        }
                    ],
                    'max_tokens': 1200
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
      };

      
  async function translateTextChinese() {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openAIKey}`
                },
                body: JSON.stringify({
                    'model': 'gpt-4',
                    'messages': [
                        {
                            'role': 'system',
                            'content': "You are a fluent Mandarin Chinese and English speaker. When I send you something in English, I want you to translate it to Mandarin Chinese. If I send you any other language just give me the English translation."
                        },
                        {
                            'role': 'user',
                            'content': text
                        }
                    ],
                    'max_tokens': 1200
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
  </script>
  
  <div class="text-center  text-yellow-100  glass-effect shadow-xl py-10 min-h-screen">
    {#if responseData}
    <div class="mt-10 glass-effect shadow-lg rounded px-8 pt-6 pb-8 mb-4 mx-auto w-1/2 overflow-auto  ">
      <h1 class="">Translation:</h1>
      <p class="text-yellow-100  text-lg mb-4">{translation}</p>
      <!-- Add a link to the Google Search URL -->
      <button onclick="window.open('{googleSearchUrl}', '_blank')" class=" text-yellow-100  py-2 px-4 rounded glass-effect">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" width="20" height="15">
      </button>
      <button onclick="window.open('{duckduckGoSearchUrl}', '_blank')" class=" text-yellow-100  py-2 px-4 rounded glass-effect">
        <img src="https://handwiki.org/wiki/images/8/88/DuckDuckGo_logo.svg" alt="DuckDuckGo Logo" width="20" height="15">
      </button>

      <button onclick="window.open('{youComSearchUrl}', '_blank')" class=" text-yellow-100 py-2 px-4 rounded glass-effect">
        <img src="https://you.com/images/ydc-logo-lightdarkmode.svg" alt="You.com Logo" width="20" height="15">
      </button>
    </div>
    {/if}
    <div class ="glass-effect rounded-full text-yellow-100  p-10 rounded mx-auto w-1/2">
    <form class = "">
      <div class="mb-5">
        <label for="text-input" class="block mb-1 text-yellow-100 ">Translate Here:</label>
        <input id="text-input" bind:value={text} placeholder="Enter text to translate..." class="w-full text-center p-2 border border-yellow-600 animate-yellowGlow rounded" />
      </div>
      <button type="submit" on:click={() => translateTextThai('Thai')} class="glass-effect text-yellow-100  py-2 px-4 rounded transition">
        <img
  src="https://flagcdn.com/40x30/th.png"
  srcset="https://flagcdn.com/80x60/th.png 2x,
    https://flagcdn.com/120x90/th.png 3x"
  width="20"
  height="15"
  alt="Thailand">
      </button>
      <button type="button" on:click={translateTextJapanese} class="glass-effect text-yellow-100  py-2 px-4 rounded transition">
        <img
          src="https://flagcdn.com/40x30/jp.png"
          srcset="https://flagcdn.com/80x60/jp.png 2x,
          https://flagcdn.com/120x90/jp.png 3x"
          width="20"
          height="15"
          alt="Japan"
        >
      </button>
      <button type="submit" on:click={() => translateTextChinese('Chinese')} class=" glass-effect text-yellow-100  py-2 px-4 rounded transition">
        <img
  src="https://flagcdn.com/40x30/cn.png"
  srcset="https://flagcdn.com/80x60/cn.png 2x,
    https://flagcdn.com/120x90/cn.png 3x"
  width="20"
  height="15"
  alt="China">
      </button>
    </form>
  </div>
</div>
  