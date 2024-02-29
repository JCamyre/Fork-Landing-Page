async function submitEmail(email: string) {
  try {
    const response = await fetch('/api/addEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit email');
    }

    const data = await response.json();
    return data; // Or handle the response data as needed
  } catch (error) {
    // console.error('Error submitting email:', error);
    // Handle the error appropriately in your UI
    return 'error';
  }
}

export default submitEmail;
