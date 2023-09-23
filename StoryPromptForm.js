// src/components/StoryPromptForm.js
import React, { useState } from 'react';

function StoryPromptForm() {
  const [prompt, setPrompt] = useState('');
  
  const handleSubmit = async () => {
    // Send the prompt to the backend for story generation.
    // You'll need to implement this using fetch or axios.
    const response = await fetch('/api/generate-story', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    // Handle the generated story data here.
  };

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your story prompt..."
      />
      <button onClick={handleSubmit}>Generate Story</button>
    </div>
  );
}

export default StoryPromptForm;

