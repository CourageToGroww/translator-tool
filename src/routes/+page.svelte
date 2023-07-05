
<script>
	import SimpleCarousel from '../lib/SimpleCarousel.svelte'; 
  import 'uno.css'



      let text = '';
      let translation = '';
      let responseData = null; 
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

<style>
.glass-effect {
    font-family: 'Press Start 2P', cursive;
  }
  .buttons-panel{
    display: flex;
    justify-content: space-between;
  }
</style>

<div class="relative">
  <div class="absolute z-0 inset-0">
    <SimpleCarousel/>
  </div>
  <main class="relative z-20  glass-effect shadow-xl py-10 min-h-screen">
      <div class=" z-10 glass-effect text-red-500 text-center rounded p-10 rounded mx-auto my-auto w-1/2">Translate Here:
        <form class="mt-5">
          <div class="mb-10">
            <input id="text-input" bind:value={text} placeholder="Enter text to begin:" class="w-full text-gray text-center p-2 border glass-effect w rounded" />
          </div>
          <button type="submit" on:click={() => translateTextThai('Thai')} class="btn-glass-effect py-2 px-4 rounded transition">
            <img src="https://flagcdn.com/40x30/th.png" srcset="https://flagcdn.com/80x60/th.png 2x, https://flagcdn.com/120x90/th.png 3x" width="20" height="15" alt="Thailand">
          </button>
          <button type="button" on:click={translateTextJapanese} class="btn-glass-effect py-2 px-4 rounded transition glass-effect">
            <img src="https://flagcdn.com/40x30/jp.png" srcset="https://flagcdn.com/80x60/jp.png 2x, https://flagcdn.com/120x90/jp.png 3x" width="20" height="15" alt="Japan">
          </button>
          <button type="submit" on:click={() => translateTextChinese('Chinese')} class=" btn-glass-effect  py-2 px-4 rounded transition">
            <img src="https://flagcdn.com/40x30/cn.png" srcset="https://flagcdn.com/80x60/cn.png 2x, https://flagcdn.com/120x90/cn.png 3x" width="20" height="15" alt="China">
          </button>

          <div class="buttons-panel ">
            <div class="grid grid-cols-4 gap-4 round">
            <button class="btn-glass-effect py-2 px-4 rounded transition"></button>
            <button class="btn-glass-effect py-2 px-4 rounded transition"></button>
            <button class="btn-glass-effect py-2 px-4 rounded transition"></button>
            <button class="btn-glass-effect py-2 px-4 rounded transition"></button>
            <button class="btn-glass-effect py-2 px-4 rounded transition"></button>
            <button class="btn-glass-effect py-2 px-4 rounded transition"></button>
            <button class="btn-glass-effect py-2 px-4 rounded transition"></button>
            <button class="btn-glass-effect py-2 px-4 rounded transition"></button>
          </div>
        </div>
        </form>
        {#if responseData}
        <div class="mt-10 glass-effect shadow-lg rounded px-8 pt-6 pb-8 mb-4 mx-auto w-1/2 overflow-auto">
          <p class="glass-effect text-xl mb-4">{translation}</p>
          <button onclick="window.open('{googleSearchUrl}', '_blank')" class="  py-2 px-4 rounded glass-effect">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" width="20" height="15">
          </button>
          <button onclick="window.open('{duckduckGoSearchUrl}', '_blank')" class="  py-2 px-4 rounded glass-effect">
            <img src="https://handwiki.org/wiki/images/8/88/DuckDuckGo_logo.svg" alt="DuckDuckGo Logo" width="20" height="15">
          </button>
          <button onclick="window.open('{youComSearchUrl}', '_blank')" class=" py-2 px-4 rounded glass-effect">
            <img src="https://you.com/images/ydc-logo-lightdarkmode.svg" alt="You.com Logo" width="20" height="15">
          </button>

        </div>
        {/if}
      </div>

    </main>
  </div>